import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import getDb from './db';

const SESSION_COOKIE_NAME = 'physics_cms_admin_token';

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(`physics_cms_salt_${password}`).digest('hex');
}

export function ensureDefaultAdmin() {
  const db = getDb();
  const existing = db.get<{ id: number }>('SELECT id FROM admins WHERE username = ?', ['admin']);
  if (!existing) {
    db.run(
      'INSERT INTO admins (username, password_hash, display_name) VALUES (?, ?, ?)',
      ['admin', hashPassword('admin123'), 'Quản trị viên Vật Lý (CMS)']
    );
  }
}

export function loginAdmin(username: string, password: string): { token: string; displayName: string } | null {
  ensureDefaultAdmin();
  const db = getDb();
  const hashed = hashPassword(password);
  const admin = db.get<{ id: number; username: string; display_name: string }>(
    'SELECT id, username, display_name FROM admins WHERE username = ? AND password_hash = ?',
    [username.trim(), hashed]
  );

  if (!admin) return null;

  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

  db.run(
    'INSERT INTO admin_sessions (token, admin_id, expires_at) VALUES (?, ?, ?)',
    [token, admin.id, expiresAt]
  );

  return { token, displayName: admin.display_name };
}

export function getAdminFromCookie(): { id: number; username: string; display_name: string } | null {
  try {
    ensureDefaultAdmin();
    const cookieStore = cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token) return null;

    const db = getDb();
    const session = db.get<{
      id: number;
      username: string;
      display_name: string;
      expires_at: string;
    }>(
      `SELECT a.id, a.username, a.display_name, s.expires_at
       FROM admin_sessions s
       JOIN admins a ON a.id = s.admin_id
       WHERE s.token = ?`,
      [token]
    );

    if (!session) return null;
    if (new Date(session.expires_at).getTime() < Date.now()) {
      db.run('DELETE FROM admin_sessions WHERE token = ?', [token]);
      return null;
    }

    return {
      id: session.id,
      username: session.username,
      display_name: session.display_name,
    };
  } catch {
    return null;
  }
}

export function logoutAdminToken(token?: string) {
  if (!token) return;
  const db = getDb();
  db.run('DELETE FROM admin_sessions WHERE token = ?', [token]);
}

export { SESSION_COOKIE_NAME };
