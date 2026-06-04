import AIInfrastructureOptimizationCommandCenter from "@/components/optimization/AIInfrastructureOptimizationCommandCenter";
import AutonomousWorkflowIntelligenceEngine from "@/components/workflows/AutonomousWorkflowIntelligenceEngine";

import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function OptimizationWorkspacePage() {
  const summary = getWorkspaceHealthSummary("optimization");

  const recommendationCount = Array.isArray(summary.aiSignals)
    ? summary.aiSignals.length
    : 0;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Infrastructure Optimization Workspace"
        description="Cloud optimization intelligence, workflow automation, operational efficiency analysis, and infrastructure improvement recommendations."
      />

      <ExecutiveWorkspaceContext
        workspace="Optimization"
        category="Cost & Performance Intelligence"
        description="AI-driven infrastructure optimization, cloud efficiency analysis, workflow automation intelligence, operational cost reduction strategies, and performance improvement recommendations."
      />

      <ExecutiveStatusBar workspaceName="Cost Intelligence" />

      <ExecutiveSignalStrip />

      <ExecutiveWorkspaceMetrics
        score={summary.score}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Optimization" />

      <WorkspaceSummaryCards
        title="Optimization"
        score={summary.score}
        health={summary.health}
        aiSignals={summary.aiSignals}
        priorityActions={summary.priorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        insights={summary.insights}
      />

      <AIInfrastructureOptimizationCommandCenter />

      <AutonomousWorkflowIntelligenceEngine />
    </div>
  );
}