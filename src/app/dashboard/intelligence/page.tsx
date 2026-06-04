import AutonomousInfrastructureInsightPanel from "@/components/intelligence/AutonomousInfrastructureInsightPanel";
import AutonomousIncidentCorrelationEngine from "@/components/incidents/AutonomousIncidentCorrelationEngine";
import AIExecutiveOperationsTimeline from "@/components/timeline/AIExecutiveOperationsTimeline";

import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import WorkspaceIntelligenceStrip from "@/components/workspace/WorkspaceIntelligenceStrip";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function IntelligenceWorkspacePage() {
  const summary = getWorkspaceHealthSummary("intelligence");

  const recommendationCount = Array.isArray(summary.aiSignals)
    ? summary.aiSignals.length
    : 0;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Infrastructure Intelligence Workspace"
        description="Operational telemetry intelligence, incident correlation analysis, infrastructure visibility, and AI-powered operational awareness."
      />

      <ExecutiveWorkspaceContext
        workspace="Intelligence"
        category="AI Operational Signals"
        description="AI-powered infrastructure intelligence, executive recommendations, incident correlation analysis, operational visibility, and platform-wide decision support."
      />

      <ExecutiveStatusBar workspaceName="Infrastructure Intelligence" />

      <ExecutiveSignalStrip />

      <WorkspaceIntelligenceStrip />

      <ExecutiveWorkspaceMetrics
        score={summary.score}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Intelligence" />

      <WorkspaceSummaryCards
        title="Intelligence"
        score={summary.score}
        health={summary.health}
        aiSignals={summary.aiSignals}
        priorityActions={summary.priorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        insights={summary.insights}
      />

      <AutonomousInfrastructureInsightPanel />

      <AutonomousIncidentCorrelationEngine />

      <AIExecutiveOperationsTimeline />
    </div>
  );
}