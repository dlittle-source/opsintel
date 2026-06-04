import { getWorkspaceIntelligenceAggregation } from "@/lib/workspaceIntelligenceAggregator";

export type TrendDirection = "up" | "down" | "stable";

export type ExecutiveTrendSignal = {
  label: string;
  value: number;
  change: number;
  direction: TrendDirection;
  status: "positive" | "neutral" | "negative";
};

function getDirection(change: number): TrendDirection {
  if (change > 0) return "up";
  if (change < 0) return "down";
  return "stable";
}

function getStatus(
  change: number,
  lowerIsBetter = false,
): ExecutiveTrendSignal["status"] {
  if (change === 0) {
    return "neutral";
  }

  if (lowerIsBetter) {
    return change < 0 ? "positive" : "negative";
  }

  return change > 0 ? "positive" : "negative";
}

export function getExecutiveTrendSignals(): ExecutiveTrendSignal[] {
  const aggregation = getWorkspaceIntelligenceAggregation();

  const averageDeploymentReadiness = Math.round(
    aggregation.workspaces.reduce(
      (sum, workspace) => sum + workspace.deploymentReadiness,
      0,
    ) / aggregation.workspaces.length,
  );

  const averageCostEfficiency = Math.round(
    aggregation.workspaces.reduce(
      (sum, workspace) => sum + workspace.costEfficiency,
      0,
    ) / aggregation.workspaces.length,
  );

  const averageGovernanceScore = Math.round(
    aggregation.workspaces.reduce(
      (sum, workspace) => sum + workspace.governanceScore,
      0,
    ) / aggregation.workspaces.length,
  );

  const riskSignalCount =
    aggregation.highPriorityRecommendations.length +
    aggregation.governanceSignals.length;

  const signals: Omit<ExecutiveTrendSignal, "direction">[] = [
    {
      label: "Platform Health",
      value: aggregation.platformScore,
      change: 3.1,
      status: getStatus(3.1),
    },
    {
      label: "Deployment Readiness",
      value: averageDeploymentReadiness,
      change: 1.7,
      status: getStatus(1.7),
    },
    {
      label: "Cost Efficiency",
      value: averageCostEfficiency,
      change: -2.4,
      status: getStatus(-2.4),
    },
    {
      label: "Governance Confidence",
      value: averageGovernanceScore,
      change: 2.2,
      status: getStatus(2.2),
    },
    {
      label: "Risk Signals",
      value: riskSignalCount,
      change: -1.5,
      status: getStatus(-1.5, true),
    },
  ];

  return signals.map((signal): ExecutiveTrendSignal => ({
    ...signal,
    direction: getDirection(signal.change),
  }));
}