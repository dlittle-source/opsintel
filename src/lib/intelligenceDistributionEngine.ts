import { getExecutiveTrendSignals } from "@/lib/executiveTrendEngine";
import { getWorkspaceIntelligenceAggregation } from "@/lib/workspaceIntelligenceAggregator";

export type WorkspaceIntelligenceDistribution = {
  platformScore: number;
  platformRiskPosture: string;
  strongestWorkspace: string;
  weakestWorkspace: string;
  executiveSignals: string[];
  trendSignals: ReturnType<typeof getExecutiveTrendSignals>;
  deploymentSignalCount: number;
  costSignalCount: number;
  governanceSignalCount: number;
  operationalSignalCount: number;
};

export function getWorkspaceIntelligenceDistribution(): WorkspaceIntelligenceDistribution {
  const aggregation = getWorkspaceIntelligenceAggregation();
  const trends = getExecutiveTrendSignals();

  return {
    platformScore: aggregation.platformScore,
    platformRiskPosture: aggregation.platformRiskPosture,
    strongestWorkspace: aggregation.strongestWorkspace,
    weakestWorkspace: aggregation.weakestWorkspace,

    executiveSignals: aggregation.executiveSignals.map(
      (signal) => signal.title,
    ),

    trendSignals: trends,

    deploymentSignalCount: aggregation.deploymentSignals.length,
    costSignalCount: aggregation.costSignals.length,
    governanceSignalCount: aggregation.governanceSignals.length,
    operationalSignalCount: aggregation.operationalSignals.length,
  };
}