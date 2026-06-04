export type WorkspaceKey =
  | "command-center"
  | "compliance"
  | "copilot"
  | "deployments"
  | "executive"
  | "intelligence"
  | "multicloud"
  | "optimization";

export type RiskPosture = "low" | "moderate" | "elevated" | "high";

export type ExecutiveRecommendation = {
  title: string;
  priority: "low" | "medium" | "high" | "critical";
  category: "cost" | "risk" | "deployment" | "governance" | "operations";
  summary: string;
};

export type WorkspaceIntelligence = {
  workspace: WorkspaceKey;
  readinessScore: number;
  deploymentReadiness: number;
  costEfficiency: number;
  operationalHealth: number;
  governanceScore: number;
  riskPosture: RiskPosture;
  recommendations: ExecutiveRecommendation[];
};

export type ExecutiveHealthIndex = {
  overallScore: number;
  riskPosture: RiskPosture;
  strongestWorkspace: WorkspaceKey;
  weakestWorkspace: WorkspaceKey;
  recommendations: ExecutiveRecommendation[];
  workspaces: WorkspaceIntelligence[];
};

const workspaceProfiles: Record<WorkspaceKey, Omit<WorkspaceIntelligence, "riskPosture" | "recommendations">> = {
  "command-center": {
    workspace: "command-center",
    readinessScore: 91,
    deploymentReadiness: 88,
    costEfficiency: 82,
    operationalHealth: 94,
    governanceScore: 86,
  },
  compliance: {
    workspace: "compliance",
    readinessScore: 87,
    deploymentReadiness: 82,
    costEfficiency: 78,
    operationalHealth: 84,
    governanceScore: 95,
  },
  copilot: {
    workspace: "copilot",
    readinessScore: 89,
    deploymentReadiness: 86,
    costEfficiency: 81,
    operationalHealth: 90,
    governanceScore: 84,
  },
  deployments: {
    workspace: "deployments",
    readinessScore: 84,
    deploymentReadiness: 92,
    costEfficiency: 76,
    operationalHealth: 86,
    governanceScore: 80,
  },
  executive: {
    workspace: "executive",
    readinessScore: 93,
    deploymentReadiness: 88,
    costEfficiency: 85,
    operationalHealth: 91,
    governanceScore: 89,
  },
  intelligence: {
    workspace: "intelligence",
    readinessScore: 90,
    deploymentReadiness: 85,
    costEfficiency: 83,
    operationalHealth: 92,
    governanceScore: 87,
  },
  multicloud: {
    workspace: "multicloud",
    readinessScore: 82,
    deploymentReadiness: 79,
    costEfficiency: 74,
    operationalHealth: 81,
    governanceScore: 78,
  },
  optimization: {
    workspace: "optimization",
    readinessScore: 86,
    deploymentReadiness: 83,
    costEfficiency: 91,
    operationalHealth: 84,
    governanceScore: 82,
  },
};

function calculateRiskPosture(score: number): RiskPosture {
  if (score >= 90) return "low";
  if (score >= 80) return "moderate";
  if (score >= 70) return "elevated";
  return "high";
}

function generateRecommendations(
  workspace: WorkspaceKey,
  profile: Omit<WorkspaceIntelligence, "riskPosture" | "recommendations">,
): ExecutiveRecommendation[] {
  const recommendations: ExecutiveRecommendation[] = [];

  if (profile.costEfficiency < 80) {
    recommendations.push({
      title: "Review cloud cost efficiency",
      priority: "high",
      category: "cost",
      summary: `${workspace} shows cost optimization opportunities that should be reviewed before scale-out.`,
    });
  }

  if (profile.deploymentReadiness < 85) {
    recommendations.push({
      title: "Improve deployment readiness",
      priority: "medium",
      category: "deployment",
      summary: `${workspace} may benefit from stronger release validation, rollback safety, and deployment checks.`,
    });
  }

  if (profile.governanceScore < 85) {
    recommendations.push({
      title: "Strengthen governance controls",
      priority: "medium",
      category: "governance",
      summary: `${workspace} should improve policy visibility, compliance mapping, and control validation.`,
    });
  }

  if (profile.operationalHealth < 85) {
    recommendations.push({
      title: "Increase operational resilience",
      priority: "high",
      category: "operations",
      summary: `${workspace} should improve monitoring, incident response signals, and service health visibility.`,
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "Maintain executive readiness posture",
      priority: "low",
      category: "operations",
      summary: `${workspace} is performing within executive-grade operational thresholds.`,
    });
  }

  return recommendations;
}

export function getWorkspaceIntelligence(
  workspace: WorkspaceKey,
): WorkspaceIntelligence {
  const profile = workspaceProfiles[workspace];

  return {
    ...profile,
    riskPosture: calculateRiskPosture(profile.readinessScore),
    recommendations: generateRecommendations(workspace, profile),
  };
}

export function getExecutiveHealthIndex(): ExecutiveHealthIndex {
  const workspaces = Object.keys(workspaceProfiles).map((workspace) =>
    getWorkspaceIntelligence(workspace as WorkspaceKey),
  );

  const overallScore = Math.round(
    workspaces.reduce((sum, item) => sum + item.readinessScore, 0) /
      workspaces.length,
  );

  const strongestWorkspace = workspaces.reduce((best, current) =>
    current.readinessScore > best.readinessScore ? current : best,
  ).workspace;

  const weakestWorkspace = workspaces.reduce((weakest, current) =>
    current.readinessScore < weakest.readinessScore ? current : weakest,
  ).workspace;

  const recommendations = workspaces
    .flatMap((workspace) => workspace.recommendations)
    .filter((recommendation) => recommendation.priority !== "low")
    .slice(0, 6);

  return {
    overallScore,
    riskPosture: calculateRiskPosture(overallScore),
    strongestWorkspace,
    weakestWorkspace,
    recommendations,
    workspaces,
  };
}