import { describe, it, expect } from 'vitest';
import {
  getFlashcardDeckData,
  recordFlashcardReview,
} from '../lib/cms-service';
import {
  UNIT_CATEGORIES,
  FORMULA_SOLVERS,
  CODATA_CONSTANTS,
  convertPhysicsUnit,
} from '../lib/physics-calculator';

describe('Feature 1: Flashcard Active Recall & Spaced Repetition (/flashcards)', () => {
  it('generates flashcards across all 7 grades for both formulas and quantities', () => {
    const deck = getFlashcardDeckData();

    expect(deck.stats.totalCards).toBeGreaterThan(200);
    expect(deck.stats.formulaCards).toBeGreaterThanOrEqual(90);
    expect(deck.stats.quantityCards).toBeGreaterThan(100);
    expect(deck.cards.length).toBe(deck.stats.totalCards);
    expect(deck.chapters.length).toBe(30);
  });

  it('persists flashcard rating and restores state cleanly', () => {
    const deck = getFlashcardDeckData();
    const firstCard = deck.cards[0];
    expect(firstCard).toBeDefined();

    const prevRating = firstCard.rating;
    const updated = recordFlashcardReview(firstCard.card_key, 'mastered');
    expect(updated.rating).toBe('mastered');

    const afterDeck = getFlashcardDeckData();
    const checked = afterDeck.cards.find((c) => c.card_key === firstCard.card_key);
    expect(checked?.rating).toBe('mastered');

    // Restore original rating
    recordFlashcardReview(firstCard.card_key, prevRating);
  });
});

describe('Feature 4: Smart SI Unit Converter & Step-by-Step Formula Solver (/calculator)', () => {
  it('converts velocity, density, area, and temperature accurately to SI base units', () => {
    expect(UNIT_CATEGORIES.length).toBe(12);
    expect(CODATA_CONSTANTS.length).toBeGreaterThanOrEqual(12);

    // 36 km/h -> 10 m/s
    const vel = convertPhysicsUnit('velocity', 36, 'km/h');
    expect(vel.siValue).toBeCloseTo(10, 5);
    expect(vel.siSymbol).toBe('m/s');

    // 1.5 g/cm³ -> 1500 kg/m³
    const dens = convertPhysicsUnit('density', 1.5, 'g/cm3');
    expect(dens.siValue).toBeCloseTo(1500, 5);

    // 25 cm² -> 0.0025 m²
    const area = convertPhysicsUnit('area', 25, 'cm2');
    expect(area.siValue).toBeCloseTo(0.0025, 6);

    // 27 °C -> 300.15 K
    const temp = convertPhysicsUnit('temperature', 27, 'C');
    expect(temp.siValue).toBeCloseTo(300.15, 2);

    // Δt = 80 °C -> ΔT = 80 K (no +273.15!)
    const deltaTemp = convertPhysicsUnit('temperature', 80, 'delta_C');
    expect(deltaTemp.siValue).toBe(80);
  });

  it('solves every target variable across all multi-variable formula solvers accurately', () => {
    expect(FORMULA_SOLVERS.length).toBeGreaterThanOrEqual(10);

    for (const solver of FORMULA_SOLVERS) {
      const defaults: Record<string, number> = {};
      for (const v of solver.variables) {
        defaults[v.key] = v.defaultValue;
      }

      for (const v of solver.variables) {
        const target = solver.targets[v.key];
        expect(target).toBeDefined();
        const computed = target.compute(defaults);
        expect(Number.isFinite(computed)).toBe(true);
        expect(computed).toBeCloseTo(v.defaultValue, 1);
      }
    }
  });
});
