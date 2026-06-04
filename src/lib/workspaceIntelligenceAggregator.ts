import {
  getExecutiveHealthIndex,
  getWorkspaceIntelligence,
  type ExecutiveRecommendation,
  type RiskPosture,
  type WorkspaceIntelligence,
  type WorkspaceKey,
} from "@/lib/executiveIntelligenceEngine";

export type WorkspaceAggregationResult = {
  platformScore: number;
  platformRiskPosture: RiskPosture;
  strongestWorkspace: WorkspaceKey;
  weakestWorkspace: WorkspaceKey;
  totalRecommendations: number;
  highPriorityRecommendations: ExecutiveRecommendation[];
  costSignals: ExecutiveRecommendation[];
  deploymentSignals: ExecutiveRecommendation[];
  governanceSignals: ExecutiveRecommendation[];
  operationalSignals: ExecutiveRecommendation[];
  executiveSignals: ExecutiveRecommendation[];
  workspaces: WorkspaceIntelligence[];
};

const workspaceKeys: WorkspaceKey[] = [
  "command-center",
  "compliance",
  "copilot",
  "deployments",
  "executive",
  "intelligence",
  "multicloud",
  "optimization",
];

function buildExecutiveSignals(
  workspaces: WorkspaceIntelligence[],
): ExecutiveRecommendation[] {
  const signals: ExecutiveRecommendation[] = [];

  const weakestCostWorkspace = [...workspaces].sort(
    (a, b) => a.costEfficiency - b.costEfficiency,
  )[0];

  const weakestDeploymentWorkspace = [...workspaces].sort(
    (a, b) => a.deploymentReadiness - b.deploymentReadiness,
  )[0];

  const weakestGovernanceWorkspace = [...workspaces].sort(
    (a, b) => a.governanceScore - b.governanceScore,
  )[0];

  const weakestOperationsWorkspace = [...workspaces].sort(
    (a, b) => a.operationalHealth - b.operationalHealth,
  )[0];

  if (weakestCostWorkspace.costEfficiency < 80) {
    signals.push({
      title: "Cost optimization review recommended",
      priority: "high",
      category: "cost",
      summary: `${weakestCostWorkspace.workspace} has the lowest cost efficiency score at ${weakestCostWorkspace.costEfficiency}%. Review right-sizing, unused resources, and scaling assumptions.`,
    });
  }

  if (weakestDeploymentWorkspace.deploymentReadiness < 85) {
    signals.push({
      title: "Deployment readiness needs attention",
      priority: "high",
      category: "deployment",
      summary: `${weakestDeploymentWorkspace.workspace} has the lowest deployment readiness score at ${weakestDeploymentWorkspace.deploymentReadiness}%. Strengthen validation, rollback confidence, and release safety.`,
    });
  }

  if (weakestGovernanceWorkspace.governanceScore < 85) {
    signals.push({
      title: "Governance posture should be strengthened",
      priority: "medium",
      category: "governance",
      summary: `${weakestGovernanceWorkspace.workspace} has the lowest governance score at ${weakestGovernanceWorkspace.governanceScore}%. Improve controls, compliance visibility, and audit readiness.`,
    });
  }

  if (weakestOperationsWorkspace.operationalHealth < 85) {
    signals.push({
      title: "Operational resilience improvement recommended",
      priority: "high",
      category: "operations",
      summary: `${weakestOperationsWorkspace.workspace} has the lowest operational health score at ${weakestOperationsWorkspace.operationalHealth}%. Review observability, incident signals, and recovery readiness.`,
    });
  }

  return signals;
}

export function getWorkspaceIntelligenceAggregation(): WorkspaceAggregationResult {
  const executiveHealth = getExecutiveHealthIndex();

  const workspaces = workspaceKeys.map((workspace) =>
    getWorkspaceIntelligence(workspace),
  );

  const workspaceRecommendations = workspaces.flatMap(
    (workspace) => workspace.recommendations,
  );

  const executiveSignals = buildExecutiveSignals(workspaces);

  const recommendations = [...executiveSignals, ...workspaceRecommendations];

  return {
    platformScore: executiveHealth.overallScore,
    platformRiskPosture: executiveHealth.riskPosture,
    strongestWorkspace: executiveHealth.strongestWorkspace,
    weakestWorkspace: executiveHealth.weakestWorkspace,
    totalRecommendations: recommendations.length,
    highPriorityRecommendations: recommendations.filter(
      (recommendation) =>
        recommendation.priority === "high" ||
        recommendation.priority === "critical",
    ),
    costSignals: recommendations.filter(
      (recommendation) => recommendation.category === "cost",
    ),
    deploymentSignals: recommendations.filter(
      (recommendation) => recommendation.category === "deployment",
    ),
    governanceSignals: recommendations.filter(
      (recommendation) => recommendation.category === "governance",
    ),
    operationalSignals: recommendations.filter(
      (recommendation) => recommendation.category === "operations",
    ),
    executiveSignals,
    workspaces,
  };
}