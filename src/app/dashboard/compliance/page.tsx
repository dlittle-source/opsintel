import ExecutiveComplianceIntelligencePanel from "@/components/compliance/ExecutiveComplianceIntelligencePanel";

import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import WorkspaceIntelligenceStrip from "@/components/workspace/WorkspaceIntelligenceStrip";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function ComplianceWorkspacePage() {
  const summary = getWorkspaceHealthSummary("compliance");

  const recommendationCount = Array.isArray(summary.aiSignals)
    ? summary.aiSignals.length
    : 0;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Compliance & Governance Workspace"
        description="Enterprise governance visibility, compliance posture monitoring, operational controls, and policy intelligence."
      />

      <ExecutiveWorkspaceContext
        workspace="Compliance"
        category="Governance & Risk Management"
        description="Enterprise governance oversight, compliance posture intelligence, operational control validation, policy adherence monitoring, and executive risk management visibility."
      />

      <ExecutiveStatusBar workspaceName="Governance" />

      <ExecutiveSignalStrip />

      <WorkspaceIntelligenceStrip />

      <ExecutiveWorkspaceMetrics
        score={summary.score}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Compliance" />

      <WorkspaceSummaryCards
        title="Compliance"
        score={summary.score}
        health={summary.health}
        aiSignals={summary.aiSignals}
        priorityActions={summary.priorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        insights={summary.insights}
      />

      <ExecutiveComplianceIntelligencePanel />
    </div>
  );
}