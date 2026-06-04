import AutonomousAICommandCenter from "@/components/command/AutonomousAICommandCenter";

import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import WorkspaceIntelligenceStrip from "@/components/workspace/WorkspaceIntelligenceStrip";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function CommandCenterWorkspacePage() {
  const summary = getWorkspaceHealthSummary("command-center");

  const recommendationCount = Array.isArray(summary.aiSignals)
    ? summary.aiSignals.length
    : 0;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Autonomous Command Center"
        description="Centralized AI operations control, autonomous infrastructure orchestration, executive operational oversight, and intelligent command workflows."
      />

      <ExecutiveWorkspaceContext
        workspace="Command Center"
        category="Autonomous Operations"
        description="Centralized AI-powered command and control, autonomous infrastructure orchestration, executive operational oversight, incident response coordination, and intelligent operational workflows."
      />

      <ExecutiveStatusBar workspaceName="Incident Command" />

      <ExecutiveSignalStrip />

      <WorkspaceIntelligenceStrip />

      <ExecutiveWorkspaceMetrics
        score={summary.score}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Command Center" />

      <WorkspaceSummaryCards
        title="Command Center"
        score={summary.score}
        health={summary.health}
        aiSignals={summary.aiSignals}
        priorityActions={summary.priorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        insights={summary.insights}
      />

      <AutonomousAICommandCenter />
    </div>
  );
}