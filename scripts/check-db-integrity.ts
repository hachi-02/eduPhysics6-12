import getDb from '../lib/db';

const db = getDb();
const fk = db.query('PRAGMA foreign_key_check;');
console.log('Foreign key check violations:', fk.length);

const orphanChapters = db.query('SELECT c.id FROM chapters c LEFT JOIN grades g ON g.id = c.grade_id WHERE g.id IS NULL');
console.log('Orphan chapters:', orphanChapters.length);

const orphanTopics = db.query('SELECT t.id FROM topics t LEFT JOIN chapters c ON c.id = t.chapter_id WHERE c.id IS NULL');
console.log('Orphan topics:', orphanTopics.length);

const orphanSims = db.query('SELECT s.id FROM simulations s LEFT JOIN topics t ON t.id = s.topic_id WHERE t.id IS NULL');
console.log('Orphan simulations:', orphanSims.length);

const orphanQuestionsTopic = db.query('SELECT q.id FROM questions q LEFT JOIN topics t ON t.id = q.topic_id WHERE q.scope_type = \'topic\' AND t.id IS NULL');
console.log('Orphan topic questions:', orphanQuestionsTopic.length);

const orphanQuestionsChapter = db.query('SELECT q.id FROM questions q LEFT JOIN chapters c ON c.id = q.chapter_id WHERE q.scope_type = \'chapter\' AND c.id IS NULL');
console.log('Orphan chapter questions:', orphanQuestionsChapter.length);

const dupChapterCodes = db.query('SELECT code, count(*) as c FROM chapters GROUP BY code HAVING c > 1');
console.log('Duplicate chapter codes:', dupChapterCodes.length);

const dupTopicCodes = db.query('SELECT code, count(*) as c FROM topics GROUP BY code HAVING c > 1');
console.log('Duplicate topic codes:', dupTopicCodes.length);

const primarySeededGrades = db.get<{ c: number }>('SELECT count(*) as c FROM grades WHERE is_primary_seeded = 1')?.c;
console.log('Primary seeded grades count:', primarySeededGrades);

const questionScopeCheck = db.get<{ c: number }>('SELECT count(*) as c FROM questions WHERE scope_type NOT IN (\'topic\', \'chapter\')')?.c;
console.log('Invalid scope questions count:', questionScopeCheck);

const questionsWithoutOptions = db.get<{ c: number }>('SELECT count(*) as c FROM questions WHERE options_json IS NULL OR length(options_json) < 4')?.c;
console.log('Questions without options:', questionsWithoutOptions);

const questionsWithInvalidCorrectIndex = db.get<{ c: number }>('SELECT count(*) as c FROM questions WHERE correct_index NOT IN (0, 1, 2, 3)')?.c;
console.log('Questions with invalid correct_index:', questionsWithInvalidCorrectIndex);
