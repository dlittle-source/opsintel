import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import ExecutiveStrategicCommandCenter from "@/components/executive/ExecutiveStrategicCommandCenter";
import ExecutivePriorityBriefing from "@/components/executive/ExecutivePriorityBriefing";
import ExecutiveDecisionSummary from "@/components/executive/ExecutiveDecisionSummary";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import AIExecutiveIntelligenceEngine from "@/components/executive/AIExecutiveIntelligenceEngine";
import WorkspaceIntelligenceMatrix from "@/components/executive/WorkspaceIntelligenceMatrix";
import ExecutiveTrendPanel from "@/components/executive/ExecutiveTrendPanel";
import FinalExecutivePresentationLayer from "@/components/presentation/FinalExecutivePresentationLayer";

import { getExecutiveHealthIndex } from "@/lib/executiveIntelligenceEngine";
import { getWorkspaceIntelligenceAggregation } from "@/lib/workspaceIntelligenceAggregator";
import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function ExecutiveWorkspacePage() {
  const summary = getWorkspaceHealthSummary("executive");

  const executiveHealth = getExecutiveHealthIndex();
  const aggregation = getWorkspaceIntelligenceAggregation();

  const recommendationCount = aggregation.totalRecommendations;

  const existingSignals = Array.isArray(summary.aiSignals)
    ? summary.aiSignals
    : [];

  const existingPriorityActions = Array.isArray(summary.priorityActions)
    ? summary.priorityActions
    : [];

  const dynamicSignals = [
    `Executive Health Index: ${executiveHealth.overallScore}%`,
    `Strongest workspace: ${aggregation.strongestWorkspace}`,
    `Needs attention: ${aggregation.weakestWorkspace}`,
    `Platform recommendations: ${aggregation.totalRecommendations}`,
    ...existingSignals,
  ];

  const dynamicPriorityActions =
    aggregation.highPriorityRecommendations.length > 0
      ? aggregation.highPriorityRecommendations.map(
          (recommendation) => recommendation.title,
        )
      : existingPriorityActions;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Executive Intelligence Workspace"
        description="Strategic AI-powered infrastructure intelligence, executive readiness analysis, business impact visibility, and enterprise decision support."
      />

      <ExecutiveWorkspaceContext
        workspace="Executive"
        category="Command Overview"
        description="Centralized executive visibility across architecture readiness, AI signals, operational posture, deployment health, and platform-level decision intelligence."
      />

      <ExecutiveStatusBar workspaceName="Architecture Intelligence" />

      <ExecutiveSignalStrip />

      <ExecutiveWorkspaceMetrics
        score={aggregation.platformScore}
        confidence={summary.confidence}
        riskPosture={aggregation.platformRiskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Executive" />

      <WorkspaceSummaryCards
        title="Executive Workspace"
        score={aggregation.platformScore}
        health={summary.health}
        aiSignals={dynamicSignals}
        priorityActions={dynamicPriorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={aggregation.platformRiskPosture}
        insights={summary.insights}
      />

      <ExecutiveStrategicCommandCenter />

      <ExecutivePriorityBriefing />

      <ExecutiveDecisionSummary />

      <FinalExecutivePresentationLayer />

      <AIExecutiveIntelligenceEngine />

      <WorkspaceIntelligenceMatrix />

      <ExecutiveTrendPanel />
    </div>
  );
}