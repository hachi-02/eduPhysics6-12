import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { TF_BANK } from '../lib/format2025-bank';

const dbPath = path.join(process.cwd(), 'physics_cms.db');
const db = new DatabaseSync(dbPath);

console.log('Syncing TF_BANK into physics_cms.db...');
console.log('Total bank entries:', Object.keys(TF_BANK).length);

// Fetch all questions with their hierarchy
const rows = db.prepare(`
  SELECT q.id, q.order_index, q.scope_type, q.question_text,
         ch.code AS chapter_code, t.code AS topic_code, g.grade_number
  FROM questions q
  JOIN chapters ch ON ch.id = q.chapter_id
  JOIN grades g ON g.id = ch.grade_id
  LEFT JOIN topics t ON t.id = q.topic_id
`).all() as any[];

let updated = 0;
const updateStmt = db.prepare(`
  UPDATE questions
  SET tf_stem = ?, tf_statements_json = ?, tf_source = 'moet_2025_bank'
  WHERE id = ?
`);

for (const q of rows) {
  const scope = q.scope_type;
  const code = scope === 'topic' ? q.topic_code : q.chapter_code;
  const key = `${q.grade_number}|${scope}|${code}|${q.order_index}`;

  let entry = TF_BANK[key];
  if (!entry) {
    const cleanQ = (q.question_text || '').trim().toLowerCase();
    for (const [k, e] of Object.entries(TF_BANK)) {
      const cleanStem = e.stem.trim().toLowerCase();
      if (cleanStem === cleanQ || (cleanQ.length >= 25 && cleanStem.includes(cleanQ.slice(0, 30)))) {
        entry = e;
        break;
      }
    }
  }

  if (entry) {
    const statementsWithId = entry.statements.map((st, i) => ({
      id: ['a', 'b', 'c', 'd'][i] || `item_${i}`,
      text: st.text,
      is_correct: st.is_correct,
      explanation: st.explanation,
    }));
    updateStmt.run(entry.stem, JSON.stringify(statementsWithId), q.id);
    updated++;
  }
}

console.log(`Successfully synced ${updated} questions in physics_cms.db with curated MOET 2025 True/False bank!`);
