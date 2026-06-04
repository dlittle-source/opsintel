import ExecutiveAICopilotLayer from "@/components/copilot/ExecutiveAICopilotLayer";

import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function CopilotWorkspacePage() {
  const summary = getWorkspaceHealthSummary("copilot");

  const recommendationCount = Array.isArray(summary.aiSignals)
    ? summary.aiSignals.length
    : 0;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Executive AI Copilot Workspace"
        description="Conversational infrastructure intelligence, executive advisory guidance, operational Q&A, and AI-powered decision support."
      />

      <ExecutiveWorkspaceContext
        workspace="Copilot"
        category="Executive AI Advisory"
        description="Conversational infrastructure intelligence, executive decision support, operational guidance, architecture recommendations, and AI-powered strategic advisory capabilities."
      />

      <ExecutiveStatusBar workspaceName="AI Copilot" />

      <ExecutiveSignalStrip />

      <ExecutiveWorkspaceMetrics
        score={summary.score}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Copilot" />

      <WorkspaceSummaryCards
        title="AI Copilot"
        score={summary.score}
        health={summary.health}
        aiSignals={summary.aiSignals}
        priorityActions={summary.priorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        insights={summary.insights}
      />

      <ExecutiveAICopilotLayer />
    </div>
  );
}