import fs from 'node:fs';
import path from 'node:path';

export interface DatabaseRunResult {
  changes: number;
  lastInsertRowid: number | bigint;
}

export interface DatabaseClient {
  query<T = any>(sql: string, params?: any[]): T[];
  get<T = any>(sql: string, params?: any[]): T | undefined;
  run(sql: string, params?: any[]): DatabaseRunResult;
  exec(sql: string): void;
  close?: () => void;
  readonly driver: 'better-sqlite3' | 'node:sqlite';
}

declare global {
  // eslint-disable-next-line no-var
  var _physics_cms_sqlite_db: DatabaseClient | undefined;
}

function createRawConnection(dbPath: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const BetterSqlite3 = require('better-sqlite3');
    const raw = new BetterSqlite3(dbPath);
    return {
      driver: 'better-sqlite3' as const,
      raw,
      prepare(sql: string) {
        const stmt = raw.prepare(sql);
        return {
          all: (...params: any[]) => stmt.all(...params),
          get: (...params: any[]) => stmt.get(...params),
          run: (...params: any[]) => stmt.run(...params),
        };
      },
      exec(sql: string) {
        raw.exec(sql);
      },
      close() {
        raw.close();
      },
    };
  } catch {
    // Fallback to native node:sqlite (Node 22.5+ / Node 24)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { DatabaseSync } = require('node:sqlite');
    const raw = new DatabaseSync(dbPath);
    return {
      driver: 'node:sqlite' as const,
      raw,
      prepare(sql: string) {
        const stmt = raw.prepare(sql);
        return {
          all: (...params: any[]) => stmt.all(...params),
          get: (...params: any[]) => stmt.get(...params),
          run: (...params: any[]) => {
            const res = stmt.run(...params);
            return {
              changes: Number(res.changes || 0),
              lastInsertRowid: res.lastInsertRowid !== undefined ? res.lastInsertRowid : 0,
            };
          },
        };
      },
      exec(sql: string) {
        raw.exec(sql);
      },
      close() {
        raw.close();
      },
    };
  }
}

function ensureInitialized(client: DatabaseClient) {
  const schemaPath = path.join(process.cwd(), 'lib', 'schema.sql');
  if (fs.existsSync(schemaPath)) {
    const sql = fs.readFileSync(schemaPath, 'utf8');
    client.exec(sql);
  }
  migrateQuestionFormatColumns(client);
  ensureAdaptiveCatTable(client);
}

function ensureAdaptiveCatTable(client: DatabaseClient) {
  try {
    client.exec(`
      CREATE TABLE IF NOT EXISTS adaptive_cat_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        scope_type TEXT NOT NULL,
        scope_id INTEGER NOT NULL,
        grade_number INTEGER,
        total_questions INTEGER NOT NULL,
        correct_count INTEGER NOT NULL,
        final_theta REAL NOT NULL,
        final_se REAL NOT NULL,
        confidence_pct INTEGER NOT NULL,
        predicted_score_10 REAL NOT NULL,
        ability_tier_label TEXT NOT NULL,
        time_spent_sec INTEGER NOT NULL,
        history_json TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
      );
    `);
  } catch {
    // Ignore table creation errors
  }
}

/**
 * Bổ sung các cột phục vụ Cấu trúc đề 2025 cho bảng questions của CSDL cũ
 * (CREATE TABLE IF NOT EXISTS không tự thêm cột vào bảng đã tồn tại).
 */
function migrateQuestionFormatColumns(client: DatabaseClient) {
  try {
    const cols = client.query<{ name: string }>('PRAGMA table_info(questions)').map((c) => c.name);
    if (cols.length === 0) return;
    const wanted: [string, string][] = [
      ['tf_stem', 'TEXT'],
      ['tf_statements_json', 'TEXT'],
      ['tf_source', 'TEXT'],
    ];
    for (const [name, type] of wanted) {
      if (!cols.includes(name)) {
        client.exec(`ALTER TABLE questions ADD COLUMN ${name} ${type}`);
      }
    }
  } catch {
    // Ignore migration errors (e.g. concurrent migration)
  }
}

function initDatabaseInstance(dbPath: string): DatabaseClient {
  const conn = createRawConnection(dbPath);
  try {
    conn.exec('PRAGMA foreign_keys = ON;');
    if (dbPath !== ':memory:') {
      conn.exec(`
        PRAGMA journal_mode = WAL;
        PRAGMA busy_timeout = 5000;
        PRAGMA synchronous = NORMAL;
      `);
    }
  } catch {
    // Ignore pragma errors
  }

  const client: DatabaseClient = {
    driver: conn.driver,
    query<T = any>(sql: string, params: any[] = []): T[] {
      return conn.prepare(sql).all(...params) as T[];
    },
    get<T = any>(sql: string, params: any[] = []): T | undefined {
      return conn.prepare(sql).get(...params) as T | undefined;
    },
    run(sql: string, params: any[] = []): DatabaseRunResult {
      return conn.prepare(sql).run(...params);
    },
    exec(sql: string): void {
      conn.exec(sql);
    },
    close() {
      conn.close();
      if (globalThis._physics_cms_sqlite_db === client) {
        globalThis._physics_cms_sqlite_db = undefined;
      }
    },
  };

  ensureInitialized(client);
  return client;
}

export function getDb(): DatabaseClient {
  if (!globalThis._physics_cms_sqlite_db) {
    const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), 'physics_cms.db');
    globalThis._physics_cms_sqlite_db = initDatabaseInstance(dbPath);
  } else {
    ensureAdaptiveCatTable(globalThis._physics_cms_sqlite_db);
  }
  return globalThis._physics_cms_sqlite_db;
}

export default getDb;
