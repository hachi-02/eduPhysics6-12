export const GRADE_COOKIE_NAME = 'eduphysics_grade';
export const GRADE_STORAGE_KEY = 'eduphysics_selected_grade';

export function isValidGradeNumber(val: unknown): val is number {
  const n = typeof val === 'number' ? val : Number(val);
  return Number.isInteger(n) && n >= 6 && n <= 12;
}

export function saveActiveGrade(grade: number): void {
  if (!isValidGradeNumber(grade)) return;
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(GRADE_STORAGE_KEY, String(grade));
  } catch {
    // Ignore storage errors
  }

  try {
    document.cookie = `${GRADE_COOKIE_NAME}=${grade}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Ignore cookie errors
  }

  try {
    window.dispatchEvent(new CustomEvent('eduphysics-grade-change', { detail: { grade } }));
  } catch {
    // Ignore event errors
  }
}

export function getSavedActiveGrade(fallback: number = 6): number {
  if (typeof window === 'undefined') return fallback;

  try {
    const fromStorage = window.localStorage.getItem(GRADE_STORAGE_KEY);
    if (fromStorage && isValidGradeNumber(Number(fromStorage))) {
      return Number(fromStorage);
    }
  } catch {
    // Ignore storage errors
  }

  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${GRADE_COOKIE_NAME}=([^;]*)`));
    if (match && isValidGradeNumber(Number(decodeURIComponent(match[1])))) {
      return Number(decodeURIComponent(match[1]));
    }
  } catch {
    // Ignore cookie errors
  }

  return fallback;
}
