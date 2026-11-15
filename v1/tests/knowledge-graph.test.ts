import { describe, it, expect } from 'vitest';
import {
  KNOWLEDGE_NODE_SPECS,
  KNOWLEDGE_GRAPH_EDGES,
  validateKnowledgeDag,
  buildKnowledgeGraphState,
  tracePrerequisiteGaps,
  TopicRuntimeInput,
} from '../lib/knowledge-graph';

function inferGradeFromCode(code: string): number {
  const m = code.match(/^G(\d+)-/);
  if (m) return parseInt(m[1], 10);
  return 6;
}

function createMockRuntimeTopics(
  overrides: Record<string, Partial<TopicRuntimeInput>> = {}
): TopicRuntimeInput[] {
  return Object.keys(KNOWLEDGE_NODE_SPECS).map((code, index) => {
    const grade = inferGradeFromCode(code);
    const base: TopicRuntimeInput = {
      id: index + 1,
      code,
      title: `Bài học ${code}`,
      grade_number: grade,
      chapter_id: grade * 10 + 1,
      chapter_code: 'CH1',
      chapter_title: 'Chương 1',
      order_index: index + 1,
      activeMistakeCount: 0,
      masteredMistakeCount: 0,
      totalWrongCount: 0,
      attemptCount: 0,
      bestScorePct: null,
      avgScorePct: null,
    };
    return {
      ...base,
      ...(overrides[code] || {}),
    };
  });
}

describe('Knowledge Graph DAG & Prerequisite Gap Detector', () => {
  it('validates that all 92 topics form a valid Directed Acyclic Graph (DAG) with 0 cycles', () => {
    const validation = validateKnowledgeDag();
    expect(validation.valid).toBe(true);
    expect(validation.nodeCount).toBe(92);
    expect(validation.edgeCount).toBeGreaterThanOrEqual(80);
    expect(validation.errors).toEqual([]);
  });

  it('ensures every directed edge flows from an equal or lower grade/topic to a dependent topic', () => {
    for (const edge of KNOWLEDGE_GRAPH_EDGES) {
      const fromSpec = KNOWLEDGE_NODE_SPECS[edge.fromCode];
      const toSpec = KNOWLEDGE_NODE_SPECS[edge.toCode];
      expect(fromSpec).toBeDefined();
      expect(toSpec).toBeDefined();
      expect(inferGradeFromCode(edge.fromCode)).toBeLessThanOrEqual(
        inferGradeFromCode(edge.toCode)
      );
      expect(edge.weight).toBeGreaterThan(0);
      expect(edge.weight).toBeLessThanOrEqual(1);
    }
  });

  it('propagates upstream prerequisite risk to higher-grade nodes in buildKnowledgeGraphState', () => {
    // Simulate broken foundational node in Grade 10 for Mechanics/Waves
    const runtime = createMockRuntimeTopics({
      'G10-CH4-TP2': {
        activeMistakeCount: 5,
        totalWrongCount: 8,
        attemptCount: 2,
        bestScorePct: 30,
        avgScorePct: 30,
      },
      'G11-CH1-TP3': {
        activeMistakeCount: 0,
        attemptCount: 0,
      },
    });

    const graph = buildKnowledgeGraphState(runtime);
    const g10EnergyNode = graph.nodeMap['G10-CH4-TP2'];
    const g11OscEnergyNode = graph.nodeMap['G11-CH1-TP3'];

    expect(g10EnergyNode.status).toBe('broken');
    expect(g10EnergyNode.directMasteryScore).toBeLessThan(48);

    // G11-CH1-TP3 depends directly on G10-CH4-TP2, so its upstreamRiskScore must reflect the risk
    expect(g11OscEnergyNode.upstreamRiskScore).toBeGreaterThanOrEqual(20);
    expect(g11OscEnergyNode.effectiveReadiness).toBeLessThan(
      g11OscEnergyNode.directMasteryScore
    );
  });

  it('traces cross-grade root causes and builds a topologically sorted remediation roadmap (Grade 6..12)', () => {
    // Scenario: Student struggles with Grade 12 Electromagnetic Induction (G12-CH3-TP2)
    // because Grade 9 (G9-CH4-TP1) and Grade 11 (G11-CH4-TP2) are broken.
    const runtime = createMockRuntimeTopics({
      'G9-CH4-TP1': {
        activeMistakeCount: 6,
        totalWrongCount: 9,
        attemptCount: 1,
        bestScorePct: 25,
        avgScorePct: 25,
      },
      'G11-CH4-TP2': {
        activeMistakeCount: 4,
        totalWrongCount: 6,
        attemptCount: 1,
        bestScorePct: 35,
        avgScorePct: 35,
      },
      'G12-CH3-TP1': {
        activeMistakeCount: 3,
        totalWrongCount: 5,
        attemptCount: 1,
        bestScorePct: 40,
        avgScorePct: 40,
      },
      'G12-CH3-TP2': {
        activeMistakeCount: 5,
        totalWrongCount: 8,
        attemptCount: 2,
        bestScorePct: 30,
        avgScorePct: 30,
      },
    });

    const graph = buildKnowledgeGraphState(runtime);
    const trace = tracePrerequisiteGaps(graph, 'G12-CH3-TP2');

    expect(trace).not.toBeNull();
    expect(trace!.targetNode.code).toBe('G12-CH3-TP2');
    expect(trace!.ancestors.length).toBeGreaterThanOrEqual(4);
    expect(trace!.rootCauses.length).toBeGreaterThanOrEqual(2);

    const rootCodes = trace!.rootCauses.map((rc) => rc.node.code);
    expect(rootCodes).toContain('G12-CH3-TP1');
    expect(rootCodes).toContain('G9-CH4-TP1');

    // Verify Remediation Roadmap is ordered from lowest grade prerequisite up to the target Grade 12 topic
    expect(trace!.remediationRoadmap.length).toBeGreaterThanOrEqual(3);
    for (let i = 1; i < trace!.remediationRoadmap.length; i++) {
      expect(trace!.remediationRoadmap[i].node.grade_number).toBeGreaterThanOrEqual(
        trace!.remediationRoadmap[i - 1].node.grade_number
      );
    }
    expect(
      trace!.remediationRoadmap[trace!.remediationRoadmap.length - 1].node.code
    ).toBe('G12-CH3-TP2');
  });
});
