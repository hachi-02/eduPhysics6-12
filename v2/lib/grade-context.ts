export const GRADE_COOKIE_NAME = 'eduphysics_grade';
export const GRADE_STORAGE_KEY = 'eduphysics_selected_grade';
export const RETURN_TO_CURRICULUM_KEY = 'eduphysics_return_to_curriculum';

export type GradeSelection = number | 'all';

export function isValidGradeNumber(val: unknown): val is number {
  const n = typeof val === 'number' ? val : Number(val);
  return Number.isInteger(n) && n >= 6 && n <= 12;
}

export function isValidGradeSelection(val: unknown): val is GradeSelection {
  return val === 'all' || isValidGradeNumber(val);
}

function parseStoredGradeSelection(raw: string | null | undefined): GradeSelection | null {
  if (!raw) return null;
  if (raw === 'all') return 'all';
  const num = Number(raw);
  return isValidGradeNumber(num) ? num : null;
}

export function saveGradePreference(grade: GradeSelection): void {
  if (!isValidGradeSelection(grade)) return;
  if (typeof window === 'undefined') return;

  const serialized = String(grade);

  try {
    window.localStorage.setItem(GRADE_STORAGE_KEY, serialized);
  } catch {
    // Ignore storage errors
  }

  try {
    document.cookie = `${GRADE_COOKIE_NAME}=${encodeURIComponent(serialized)}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Ignore cookie errors
  }

  try {
    window.dispatchEvent(new CustomEvent('eduphysics-grade-change', { detail: { grade } }));
  } catch {
    // Ignore event errors
  }
}

export function getSavedGradePreference(): GradeSelection | null {
  if (typeof window === 'undefined') return null;

  try {
    const parsedStorage = parseStoredGradeSelection(window.localStorage.getItem(GRADE_STORAGE_KEY));
    if (parsedStorage !== null) return parsedStorage;
  } catch {
    // Ignore storage errors
  }

  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${GRADE_COOKIE_NAME}=([^;]*)`));
    const parsedCookie = parseStoredGradeSelection(
      match ? decodeURIComponent(match[1]) : null
    );
    if (parsedCookie !== null) return parsedCookie;
  } catch {
    // Ignore cookie errors
  }

  return null;
}

export function saveActiveGrade(grade: number): void {
  if (!isValidGradeNumber(grade)) return;
  saveGradePreference(grade);
}

export function getSavedActiveGrade(fallback: number = 6): number {
  const saved = getSavedGradePreference();
  return typeof saved === 'number' ? saved : fallback;
}
