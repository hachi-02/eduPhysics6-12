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
  const tableCheck = client.get<{ count: number }>(
    "SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='grades'"
  );
  if (!tableCheck || tableCheck.count === 0) {
    const schemaPath = path.join(process.cwd(), 'lib', 'schema.sql');
    if (fs.existsSync(schemaPath)) {
      const sql = fs.readFileSync(schemaPath, 'utf8');
      client.exec(sql);
    }
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
  }
  return globalThis._physics_cms_sqlite_db;
}

export default getDb;
