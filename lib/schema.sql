PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  display_name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS admin_sessions (
  token TEXT PRIMARY KEY,
  admin_id INTEGER NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS grades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  grade_number INTEGER NOT NULL UNIQUE CHECK (grade_number BETWEEN 6 AND 12),
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  level_group TEXT NOT NULL CHECK (level_group IN ('THCS', 'THPT')),
  is_primary_seeded INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS chapters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  grade_id INTEGER NOT NULL,
  order_index INTEGER NOT NULL,
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  summary_markdown TEXT NOT NULL DEFAULT '',
  key_takeaways_json TEXT NOT NULL DEFAULT '[]',
  formula_cheatsheet_json TEXT NOT NULL DEFAULT '[]',
  FOREIGN KEY (grade_id) REFERENCES grades(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS topics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chapter_id INTEGER NOT NULL,
  order_index INTEGER NOT NULL,
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  textbook_tags_json TEXT NOT NULL DEFAULT '["Kết nối tri thức", "Chân trời sáng tạo", "Cánh Diều"]',
  overview TEXT NOT NULL,
  theory_sections_json TEXT NOT NULL DEFAULT '[]',
  summary_note TEXT NOT NULL DEFAULT '',
  FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS quantities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  topic_id INTEGER NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 1,
  name TEXT NOT NULL,
  symbol TEXT NOT NULL,
  si_unit TEXT NOT NULL,
  other_units TEXT NOT NULL,
  measuring_device TEXT NOT NULL,
  description TEXT NOT NULL,
  FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS formulas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  topic_id INTEGER NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 1,
  name TEXT NOT NULL,
  latex_expression TEXT NOT NULL,
  plain_expression TEXT NOT NULL,
  variables_json TEXT NOT NULL DEFAULT '[]',
  derived_formulas_json TEXT NOT NULL DEFAULT '[]',
  usage_note TEXT NOT NULL DEFAULT '',
  FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS examples (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  topic_id INTEGER NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 1,
  title TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'Cơ bản',
  problem_statement TEXT NOT NULL,
  given_summary TEXT NOT NULL,
  solution_steps_json TEXT NOT NULL DEFAULT '[]',
  final_answer TEXT NOT NULL,
  FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS simulations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  topic_id INTEGER NOT NULL,
  sim_key TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  parameters_json TEXT NOT NULL DEFAULT '{}',
  guide_steps_json TEXT NOT NULL DEFAULT '[]',
  physics_insight TEXT NOT NULL DEFAULT '',
  FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  scope_type TEXT NOT NULL CHECK (scope_type IN ('topic', 'chapter')),
  topic_id INTEGER,
  chapter_id INTEGER NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 1,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao')),
  question_text TEXT NOT NULL,
  options_json TEXT NOT NULL,
  correct_index INTEGER NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
  explanation TEXT NOT NULL,
  FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
  FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  scope_type TEXT NOT NULL CHECK (scope_type IN ('topic', 'chapter')),
  scope_id INTEGER NOT NULL,
  student_name TEXT NOT NULL DEFAULT 'Học sinh',
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL DEFAULT 25,
  time_spent_sec INTEGER NOT NULL DEFAULT 0,
  answers_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_chapters_grade ON chapters(grade_id, order_index);
CREATE INDEX IF NOT EXISTS idx_topics_chapter ON topics(chapter_id, order_index);
CREATE INDEX IF NOT EXISTS idx_questions_topic ON questions(scope_type, topic_id, order_index);
CREATE INDEX IF NOT EXISTS idx_questions_chapter ON questions(scope_type, chapter_id, order_index);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_scope ON quiz_attempts(scope_type, scope_id);
