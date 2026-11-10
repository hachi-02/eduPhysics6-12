import { describe, it, expect } from 'vitest';
import {
  getProgressDashboardData,
  toggleTopicStudyCheckin,
} from '../lib/cms-service';

describe('Learning Progress & Mastery Analytics Dashboard (/progress)', () => {
  it('returns complete ProgressDashboardData across all 92 topics, 7 grades, and 4 cognitive tiers', () => {
    const data = getProgressDashboardData();

    expect(data.overall.totalTopics).toBe(92);
    expect(data.topics.length).toBe(92);
    expect(data.gradeSummaries.length).toBe(7);

    const grades = data.gradeSummaries.map((g) => g.grade_number);
    expect(grades).toEqual([6, 7, 8, 9, 10, 11, 12]);

    // Sum of status buckets equals totalTopics
    const statusSum =
      data.overall.completedTopics +
      data.overall.inProgressTopics +
      data.overall.needsReviewTopics +
      data.overall.notStartedTopics;
    expect(statusSum).toBe(data.overall.totalTopics);

    // 4-tier Ministry of Education difficulty breakdown
    expect(data.difficultyBreakdown.length).toBe(4);
    expect(data.difficultyBreakdown.map((d) => d.difficulty)).toEqual([
      'nhan_biet',
      'thong_hieu',
      'van_dung',
      'van_dung_cao',
    ]);

    // Daily Action Recommendations (3 smart cards)
    expect(data.recommendations.length).toBe(3);
    for (const rec of data.recommendations) {
      expect(rec.grade_number).toBeGreaterThanOrEqual(6);
      expect(rec.href).toMatch(/^\/topic\/\d+/);
    }
  });

  it('toggles manual study check-in for a topic and restores state cleanly', () => {
    const initial = getProgressDashboardData();
    const sampleTopic = initial.topics[0];
    expect(sampleTopic).toBeDefined();

    const originalState = sampleTopic.manual_completed;

    // Toggle to opposite state
    const toggledResult = toggleTopicStudyCheckin(sampleTopic.topic_id, !originalState);
    expect(toggledResult.topicId).toBe(sampleTopic.topic_id);
    expect(toggledResult.completed).toBe(!originalState);

    const afterToggle = getProgressDashboardData();
    const updatedTopic = afterToggle.topics.find((t) => t.topic_id === sampleTopic.topic_id);
    expect(updatedTopic).toBeDefined();
    expect(updatedTopic!.manual_completed).toBe(!originalState);

    // Restore original state
    toggleTopicStudyCheckin(sampleTopic.topic_id, originalState);
    const restoredData = getProgressDashboardData();
    const restoredTopic = restoredData.topics.find((t) => t.topic_id === sampleTopic.topic_id);
    expect(restoredTopic!.manual_completed).toBe(originalState);
  });
});
