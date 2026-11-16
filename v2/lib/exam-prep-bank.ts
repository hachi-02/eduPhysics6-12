import type { DifficultyLevel } from '@/types/cms';
import { OFFICIAL_EXAM_QUESTIONS } from './official-exams-bank';

export type ExamYear = 2025 | 2024 | 2023 | 2022 | 2021;

export type ExamType =
  | 'thpt_qg'
  | 'tuyen_sinh_10'
  | 'cuoi_hk2'
  | 'giua_hk2'
  | 'cuoi_hk1'
  | 'giua_hk1';

export interface ExamPaperSpec {
  id: string;
  gradeNumber: number;
  year: ExamYear | null;
  examType: ExamType;
  title: string;
  codeLabel: string;
  sourceLabel: string;
  durationMinutes: number;
  questionCount: number;
  semesterScope: 'hk1' | 'hk2' | 'full';
  difficultyMix: Record<DifficultyLevel, number>;
  seed: number;
  isOfficialReal?: boolean;
}

export interface ExamTrueFalseStatement {
  text: string;
  is_correct: boolean;
  explanation: string;
}

export interface ExamQuestionSource {
  id: number;
  chapter_id: number;
  chapter_code: string;
  chapter_title: string;
  topic_code: string | null;
  topic_title: string | null;
  grade_number: number;
  difficulty: DifficultyLevel;
  question_text: string;
  options: string[];
  correct_index: number;
  explanation: string;
  questionFormat?: 'mcq' | 'true_false' | 'short_answer';
  tfStatements?: ExamTrueFalseStatement[];
  shortAnswer?: string;
  imageUrl?: string;
  imageAlt?: string;
  figureSvg?: string;
  imageCaption?: string;
  isSupplement?: boolean;
}

export interface ExamChapterMeta {
  id: number;
  code: string;
  title: string;
  grade_number: number;
  order_index: number;
}

export const EXAM_YEARS: ExamYear[] = [2025];

export const EXAM_TYPE_META: Record<
  ExamType,
  { label: string; shortLabel: string; badgeClass: string }
> = {
  thpt_qg: {
    label: 'Tốt nghiệp THPT / Minh họa BGD',
    shortLabel: 'THPT QG',
    badgeClass: 'border-amber-400/35 bg-amber-500/15 text-amber-200',
  },
  tuyen_sinh_10: {
    label: 'Tuyển sinh vào lớp 10',
    shortLabel: 'Tuyển sinh 10',
    badgeClass: 'border-violet-400/35 bg-violet-500/15 text-violet-200',
  },
  cuoi_hk2: {
    label: 'Cuối Học kỳ II',
    shortLabel: 'Cuối HK II',
    badgeClass: 'border-cyan-400/35 bg-cyan-500/15 text-cyan-200',
  },
  giua_hk2: {
    label: 'Giữa Học kỳ II',
    shortLabel: 'Giữa HK II',
    badgeClass: 'border-sky-400/35 bg-sky-500/15 text-sky-200',
  },
  cuoi_hk1: {
    label: 'Cuối Học kỳ I',
    shortLabel: 'Cuối HK I',
    badgeClass: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200',
  },
  giua_hk1: {
    label: 'Giữa Học kỳ I',
    shortLabel: 'Giữa HK I',
    badgeClass: 'border-teal-400/35 bg-teal-500/15 text-teal-200',
  },
};

const SOURCE_LABELS_BY_YEAR: Record<ExamYear, string[]> = {
  2025: ['Chuẩn cấu trúc GDPT 2018 — Năm 2025', 'Đề tham khảo Sở GD&ĐT 2025'],
  2024: ['Sở GD&ĐT TP.HCM — Đề chuẩn 2024', 'Sở GD&ĐT Hà Nội — Năm học 2023–2024'],
  2023: ['Bộ GD&ĐT / Sở GD&ĐT — Năm 2023', 'Trường THPT Chuyên KHTN — 2023'],
  2022: ['Sở GD&ĐT Đà Nẵng — Đề chuẩn 2022', 'Liên trường THPT — Năm học 2021–2022'],
  2021: ['Đề chính thức & Tham khảo — Năm 2021', 'Sở GD&ĐT Nghệ An — Năm học 2020–2021'],
};

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  const rand = mulberry32(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getExamPapersForGrade(gradeNumber: number): ExamPaperSpec[] {
  const papers: ExamPaperSpec[] = [];
  const isHighSchool = gradeNumber >= 10;
  const subjectLabel = isHighSchool ? `Vật lí ${gradeNumber}` : `KHTN ${gradeNumber} (Phân môn Vật lí)`;
  const countOf = (id: string) => OFFICIAL_EXAM_QUESTIONS[id]?.length ?? 0;

  if (gradeNumber === 12) {
    for (const setNum of [1, 2, 3]) {
      const id = setNum === 1 ? 'g12-thpt-2025' : `g12-thpt-2025-de-${setNum}`;
      papers.push({
        id,
        gradeNumber: 12,
        year: 2025,
        examType: 'thpt_qg',
        title: `Đề Thi THPT — Đề số ${setNum}`,
        codeLabel: `Đề số ${setNum}`,
        sourceLabel: 'Vật lí 12 · Chuẩn cấu trúc GDPT 2018 (28 câu · 3 phần)',
        durationMinutes: 50,
        questionCount: countOf(id) || 28,
        semesterScope: 'full',
        difficultyMix: { nhan_biet: 0.4, thong_hieu: 0.3, van_dung: 0.2, van_dung_cao: 0.1 },
        seed: hashSeed(id),
      });
    }
  }

  if (gradeNumber === 9) {
    for (const setNum of [1, 2, 3]) {
      const id =
        setNum === 1 ? 'g9-2025-tuyen-sinh-10' : `g9-2025-tuyen-sinh-10-de-${setNum}`;
      papers.push({
        id,
        gradeNumber: 9,
        year: 2025,
        examType: 'tuyen_sinh_10',
        title: `Đề Thi Tuyển Sinh Lớp 10 — Đề số ${setNum}`,
        codeLabel: `Đề số ${setNum}`,
        sourceLabel: 'KHTN 9 (Phần Vật lí) · Chuẩn cấu trúc GDPT 2018',
        durationMinutes: 45,
        questionCount: countOf(id) || 8,
        semesterScope: 'full',
        difficultyMix: { nhan_biet: 0.35, thong_hieu: 0.35, van_dung: 0.2, van_dung_cao: 0.1 },
        seed: hashSeed(id),
      });
    }
  }

  const termDefs: Array<{
    suffix: string;
    examType: ExamType;
    termName: string;
    codeLabel: string;
    semesterScope: 'hk1' | 'hk2';
    durationMinutes: number;
  }> = [
    {
      suffix: 'cuoi-hk2',
      examType: 'cuoi_hk2',
      termName: 'Cuối Học kì II',
      codeLabel: 'Cuối HK II',
      semesterScope: 'hk2',
      durationMinutes: isHighSchool ? 50 : 45,
    },
    {
      suffix: 'giua-hk2',
      examType: 'giua_hk2',
      termName: 'Giữa Học kì II',
      codeLabel: 'Giữa HK II',
      semesterScope: 'hk2',
      durationMinutes: 45,
    },
    {
      suffix: 'cuoi-hk1',
      examType: 'cuoi_hk1',
      termName: 'Cuối Học kì I',
      codeLabel: 'Cuối HK I',
      semesterScope: 'hk1',
      durationMinutes: isHighSchool ? 50 : 45,
    },
    {
      suffix: 'giua-hk1',
      examType: 'giua_hk1',
      termName: 'Giữa Học kì I',
      codeLabel: 'Giữa HK I',
      semesterScope: 'hk1',
      durationMinutes: 45,
    },
  ];

  for (const term of termDefs) {
    for (const setNum of [1, 2, 3]) {
      const id =
        setNum === 1
          ? `g${gradeNumber}-2025-${term.suffix}`
          : `g${gradeNumber}-2025-${term.suffix}-de-${setNum}`;
      papers.push({
        id,
        gradeNumber,
        year: 2025,
        examType: term.examType,
        title: `Đề Thi ${term.termName} ${subjectLabel} — Đề số ${setNum}`,
        codeLabel: `${term.codeLabel} · Đề ${setNum}`,
        sourceLabel: `Chuẩn cấu trúc GDPT 2018${isHighSchool ? ' (3 phần)' : ''}`,
        durationMinutes: term.durationMinutes,
        questionCount: countOf(id),
        semesterScope: term.semesterScope,
        difficultyMix: { nhan_biet: 0.4, thong_hieu: 0.3, van_dung: 0.2, van_dung_cao: 0.1 },
        seed: hashSeed(id),
      });
    }
  }

  return papers;
}

export function buildExamQuestions(
  paper: ExamPaperSpec,
  allQuestions: ExamQuestionSource[],
  chapters: ExamChapterMeta[]
): ExamQuestionSource[] {
  const official = OFFICIAL_EXAM_QUESTIONS[paper.id];
  if (official && official.length > 0) {
    return official;
  }

  const gradeChapters = chapters
    .filter((c) => c.grade_number === paper.gradeNumber)
    .sort((a, b) => a.order_index - b.order_index);

  const midIdx = Math.max(1, Math.ceil(gradeChapters.length / 2));
  let allowedChapterIds: Set<number> | null = null;
  if (paper.semesterScope === 'hk1' && gradeChapters.length > 1) {
    allowedChapterIds = new Set(gradeChapters.slice(0, midIdx).map((c) => c.id));
  } else if (paper.semesterScope === 'hk2' && gradeChapters.length > 1) {
    allowedChapterIds = new Set(gradeChapters.slice(midIdx).map((c) => c.id));
  }

  const gradePool = allQuestions.filter((q) => q.grade_number === paper.gradeNumber);
  let scopedPool = allowedChapterIds
    ? gradePool.filter((q) => allowedChapterIds!.has(q.chapter_id))
    : gradePool;

  if (scopedPool.length < paper.questionCount) {
    scopedPool = gradePool;
  }

  const difficulties: DifficultyLevel[] = ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'];
  const picked: ExamQuestionSource[] = [];
  const usedIds = new Set<number>();

  for (let i = 0; i < difficulties.length; i++) {
    const diff = difficulties[i];
    const targetCount = Math.round(paper.questionCount * paper.difficultyMix[diff]);
    const candidates = shuffleWithSeed(
      scopedPool.filter((q) => q.difficulty === diff && !usedIds.has(q.id)),
      paper.seed + i * 97
    );
    for (const q of candidates.slice(0, targetCount)) {
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  if (picked.length < paper.questionCount) {
    const remaining = shuffleWithSeed(
      scopedPool.filter((q) => !usedIds.has(q.id)),
      paper.seed + 999
    );
    for (const q of remaining) {
      if (picked.length >= paper.questionCount) break;
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  const diffRank: Record<DifficultyLevel, number> = {
    nhan_biet: 0,
    thong_hieu: 1,
    van_dung: 2,
    van_dung_cao: 3,
  };

  return picked
    .slice(0, paper.questionCount)
    .sort((a, b) => diffRank[a.difficulty] - diffRank[b.difficulty] || a.id - b.id);
}
