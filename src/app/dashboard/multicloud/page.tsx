import ExecutiveMultiCloudIntelligenceGrid from "@/components/multicloud/ExecutiveMultiCloudIntelligenceGrid";

import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function MultiCloudWorkspacePage() {
  const summary = getWorkspaceHealthSummary("multicloud");

  const recommendationCount = Array.isArray(summary.aiSignals)
    ? summary.aiSignals.length
    : 0;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Multi-Cloud Operations Workspace"
        description="Cross-cloud visibility, provider intelligence, utilization monitoring, cost governance, and hybrid infrastructure insights."
      />

      <ExecutiveWorkspaceContext
        workspace="Multi-Cloud"
        category="Cross-Cloud Strategy"
        description="Unified visibility across cloud providers, infrastructure utilization intelligence, cloud governance analysis, provider optimization opportunities, and executive multi-cloud strategy insights."
      />

      <ExecutiveStatusBar workspaceName="Multi-Cloud Intelligence" />

      <ExecutiveSignalStrip />

      <ExecutiveWorkspaceMetrics
        score={summary.score}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Multi-Cloud" />

      <WorkspaceSummaryCards
        title="Multi-Cloud"
        score={summary.score}
        health={summary.health}
        aiSignals={summary.aiSignals}
        priorityActions={summary.priorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        insights={summary.insights}
      />

      <ExecutiveMultiCloudIntelligenceGrid />
    </div>
  );
}