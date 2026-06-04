export type WorkspaceHealthStatus =
  | "Healthy"
  | "Warning"
  | "Critical";

export type WorkspaceHealthSummary = {
  score: number;
  health: WorkspaceHealthStatus;
  aiSignals: number;
  priorityActions: number;
  trend: "up" | "down" | "neutral";
  confidence: number;
  riskPosture: string;
  insights: string[];
};

const workspaceHealthMap: Record<string, WorkspaceHealthSummary> = {
  executive: {
    score: 94,
    health: "Healthy",
    aiSignals: 12,
    priorityActions: 4,
    trend: "up",
    confidence: 96,
    riskPosture: "Low Risk",
    insights: [
      "Deployment readiness increased 8% this week.",
      "No critical compliance violations detected.",
      "AI advisory engine recommends modernization of 2 services.",
    ],
  },

  intelligence: {
    score: 96,
    health: "Healthy",
    aiSignals: 18,
    priorityActions: 2,
    trend: "up",
    confidence: 98,
    riskPosture: "Low Risk",
    insights: [
      "Threat intelligence volume remains stable.",
      "AI anomaly detection confidence currently operating at 98%.",
      "No emerging operational risks identified.",
    ],
  },

  deployments: {
    score: 91,
    health: "Healthy",
    aiSignals: 15,
    priorityActions: 3,
    trend: "up",
    confidence: 93,
    riskPosture: "Low Risk",
    insights: [
      "Deployment success rate remains above target.",
      "Rollback probability remains below 2%.",
      "Container and service health indicators remain stable.",
    ],
  },

  optimization: {
    score: 88,
    health: "Warning",
    aiSignals: 21,
    priorityActions: 7,
    trend: "down",
    confidence: 88,
    riskPosture: "Moderate Risk",
    insights: [
      "Infrastructure costs are trending upward.",
      "Rightsizing opportunities detected.",
      "Workload consolidation recommendations available.",
    ],
  },

  compliance: {
    score: 95,
    health: "Healthy",
    aiSignals: 11,
    priorityActions: 1,
    trend: "up",
    confidence: 97,
    riskPosture: "Low Risk",
    insights: [
      "Governance compliance score improved.",
      "Security posture remains within policy thresholds.",
      "Audit readiness verification completed successfully.",
    ],
  },

  multicloud: {
    score: 90,
    health: "Healthy",
    aiSignals: 14,
    priorityActions: 3,
    trend: "neutral",
    confidence: 92,
    riskPosture: "Low Risk",
    insights: [
      "Cross-cloud latency remains stable.",
      "Cloud diversification score improved.",
      "No provider concentration risks detected.",
    ],
  },

  "command-center": {
    score: 97,
    health: "Healthy",
    aiSignals: 24,
    priorityActions: 0,
    trend: "up",
    confidence: 99,
    riskPosture: "Low Risk",
    insights: [
      "Global operations remain stable.",
      "No high-severity incidents are active.",
      "AI orchestration systems functioning normally.",
    ],
  },

  copilot: {
    score: 93,
    health: "Healthy",
    aiSignals: 16,
    priorityActions: 2,
    trend: "up",
    confidence: 95,
    riskPosture: "Low Risk",
    insights: [
      "AI recommendation accuracy remains high.",
      "Executive guidance confidence scores improved.",
      "Optimization opportunities identified for review.",
    ],
  },
};

export function getWorkspaceHealthSummary(
  workspace: keyof typeof workspaceHealthMap
): WorkspaceHealthSummary {
  return workspaceHealthMap[workspace];
}