import DeploymentRiskPredictionPanel from "@/components/deployment/DeploymentRiskPredictionPanel";
import AIModernizationAdvisoryEngine from "@/components/modernization/AIModernizationAdvisoryEngine";
import ExecutiveArchitectureScoringPanel from "@/components/scoring/ExecutiveArchitectureScoringPanel";

import ExecutiveSignalStrip from "@/components/workspace/ExecutiveSignalStrip";
import ExecutiveStatusBar from "@/components/workspace/ExecutiveStatusBar";
import ExecutiveWorkspaceActions from "@/components/workspace/ExecutiveWorkspaceActions";
import ExecutiveWorkspaceContext from "@/components/workspace/ExecutiveWorkspaceContext";
import ExecutiveWorkspaceMetrics from "@/components/workspace/ExecutiveWorkspaceMetrics";
import ExecutiveWorkspaceHeader from "@/components/workspace/ExecutiveWorkspaceHeader";
import WorkspaceIntelligenceStrip from "@/components/workspace/WorkspaceIntelligenceStrip";
import WorkspaceSummaryCards from "@/components/workspace/WorkspaceSummaryCards";

import { getWorkspaceHealthSummary } from "@/lib/workspaceHealthEngine";

export default function DeploymentsWorkspacePage() {
  const summary = getWorkspaceHealthSummary("deployments");

  const recommendationCount = Array.isArray(summary.aiSignals)
    ? summary.aiSignals.length
    : 0;

  return (
    <div className="space-y-6">
      <ExecutiveWorkspaceHeader
        title="Deployment Operations Workspace"
        description="Deployment forecasting, modernization intelligence, architecture scoring, release readiness analysis, and operational deployment governance."
      />

      <ExecutiveWorkspaceContext
        workspace="Deployments"
        category="Release Readiness"
        description="Deployment forecasting, release risk assessment, modernization advisory insights, architecture scoring, and executive deployment governance across production environments."
      />

      <ExecutiveStatusBar workspaceName="Deployment Strategy" />

      <ExecutiveSignalStrip />

      <WorkspaceIntelligenceStrip />

      <ExecutiveWorkspaceMetrics
        score={summary.score}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        recommendationCount={recommendationCount}
      />

      <ExecutiveWorkspaceActions workspace="Deployments" />

      <WorkspaceSummaryCards
        title="Deployments"
        score={summary.score}
        health={summary.health}
        aiSignals={summary.aiSignals}
        priorityActions={summary.priorityActions}
        trend={summary.trend}
        confidence={summary.confidence}
        riskPosture={summary.riskPosture}
        insights={summary.insights}
      />

      <DeploymentRiskPredictionPanel />

      <AIModernizationAdvisoryEngine />

      <ExecutiveArchitectureScoringPanel />
    </div>
  );
}