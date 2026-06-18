"use client";

import { useEffect, useState } from "react";

import { mockArchitecture } from "@/data/mockArchitecture";
import { GeneratedArchitecture } from "@/types/architecture";
import { supabase } from "@/lib/supabaseClient";
import { getTenantBranding } from "@/lib/tenantBrandingEngine";
import { analyzeInfrastructureCosts } from "@/lib/costIntelligenceEngine";
import { analyzeDeploymentStrategy } from "@/lib/deploymentStrategyEngine";
import { generateExecutiveOperationsIntelligence } from "@/lib/executiveOperationsEngine";
import ExecutivePlatformBanner from "@/components/platform/ExecutivePlatformBanner";
import DeploymentStrategyDashboard from "@/components/deployment/DeploymentStrategyDashboard";
import TelemetryIntelligenceDashboard from "@/components/telemetry/TelemetryIntelligenceDashboard";
import OperationsCommandCenter from "@/components/operations/OperationsCommandCenter";
import ExecutiveDensityOptimizationSystem from "@/components/polish/ExecutiveDensityOptimizationSystem";
import InfrastructureHeatmap from "@/components/operations/InfrastructureHeatmap";
import ThreatIntelligenceDashboard from "@/components/security/ThreatIntelligenceDashboard";
import EnterpriseOperationsConsole from "@/components/executive/EnterpriseOperationsConsole";
import ExecutiveIntelligenceZones from "@/components/executive/ExecutiveIntelligenceZones";
import ExecutiveSystemTabs from "@/components/executive/ExecutiveSystemTabs";
import OperationalCommandGrid from "@/components/executive/OperationalCommandGrid";
import ExecutiveAIActivityLayer from "@/components/executive/ExecutiveAIActivityLayer";
import AdaptiveExecutiveWorkspace from "@/components/executive/AdaptiveExecutiveWorkspace";
import ContextualAIWorkspace from "@/components/executive/ContextualAIWorkspace";
import EnterpriseVisualRefinementSystem from "@/components/polish/EnterpriseVisualRefinementSystem";
import ExecutiveAIControlPanel from "@/components/executive/ExecutiveAIControlPanel";
import ExecutiveBreathingSpaceSystem from "@/components/polish/ExecutiveBreathingSpaceSystem";
import EnterpriseLaunchReadinessPanel from "@/components/executive/EnterpriseLaunchReadinessPanel";
import PortfolioPresentationMode from "@/components/polish/PortfolioPresentationMode";
import MonetizationPositioningStrip from "@/components/polish/MonetizationPositioningStrip";
import EnterprisePremiumFinishLayer from "@/components/polish/EnterprisePremiumFinishLayer";
import FinalExecutiveReadinessBanner from "@/components/polish/FinalExecutiveReadinessBanner";
import EnterpriseVisualHierarchyCalibration from "@/components/polish/EnterpriseVisualHierarchyCalibration";
import ExecutiveCommandRibbon from "@/components/executive/ExecutiveCommandRibbon";
import EnterpriseCommandNavigation from "@/components/executive/EnterpriseCommandNavigation";
import ExecutiveLayoutRhythmSystem from "@/components/polish/ExecutiveLayoutRhythmSystem";
import AIExecutiveIntelligenceEngine from "@/components/intelligence/AIExecutiveIntelligenceEngine";
import AIExecutiveRecommendationFeed from "@/components/intelligence/AIExecutiveRecommendationFeed";
import AutonomousInfrastructureInsightPanel from "@/components/intelligence/AutonomousInfrastructureInsightPanel";
import ExecutiveArchitectureScoringPanel from "@/components/intelligence/ExecutiveArchitectureScoringPanel";
import AIModernizationAdvisoryEngine from "@/components/intelligence/AIModernizationAdvisoryEngine";
import DeploymentRiskPredictionPanel from "@/components/deployment/DeploymentRiskPredictionPanel";
import AutonomousIncidentCorrelationEngine from "@/components/incidents/AutonomousIncidentCorrelationEngine";
import AIInfrastructureOptimizationCommandCenter from "@/components/optimization/AIInfrastructureOptimizationCommandCenter";
import ExecutiveComplianceIntelligencePanel from "@/components/compliance/ExecutiveComplianceIntelligencePanel";
import AIExecutiveOperationsTimeline from "@/components/timeline/AIExecutiveOperationsTimeline";
import ExecutiveROIIntelligencePanel from "@/components/roi/ExecutiveROIIntelligencePanel";
import AutonomousAICommandCenter from "@/components/command/AutonomousAICommandCenter";
import ExecutiveMultiCloudIntelligenceGrid from "@/components/multicloud/ExecutiveMultiCloudIntelligenceGrid";
import ExecutiveAICopilotLayer from "@/components/copilot/ExecutiveAICopilotLayer";
import AutonomousWorkflowIntelligenceEngine from "@/components/workflows/AutonomousWorkflowIntelligenceEngine";
import FinalExecutivePresentationLayer from "@/components/presentation/FinalExecutivePresentationLayer";

import { analyzeMultiCloudArchitecture } from "@/lib/multiCloudIntelligence";
import MultiCloudIntelligenceDashboard from "@/components/multicloud/MultiCloudIntelligenceDashboard";
import AuthPanel from "@/components/auth/AuthPanel";
import SavedProjectsPanel from "@/components/projects/SavedProjectsPanel";
import InfrastructureInsightsPanel from "@/components/dashboard/InfrastructureInsightsPanel";
import ArchitectureReportPanel from "@/components/architecture/ArchitectureReportPanel";
import ExportActions from "@/components/export/ExportActions";
import StackOverviewPanel from "@/components/architecture/StackOverviewPanel";
import NodeInventoryPanel from "@/components/architecture/NodeInventoryPanel";
import ConnectionMatrixPanel from "@/components/architecture/ConnectionMatrixPanel";
import ArchitectureCanvas from "@/components/architecture/ArchitectureCanvas";
import InfrastructureGovernancePanel from "@/components/governance/InfrastructureGovernancePanel";
import InfrastructureRecommendationsPanel from "@/components/governance/InfrastructureRecommendationsPanel";
import InfrastructureCostDashboard from "@/components/cost/InfrastructureCostDashboard";
import PromptInputPanel from "@/components/ai/PromptInputPanel";
import SnapshotComparePanel from "@/components/snapshots/SnapshotComparePanel";
import MetricsPanel from "@/components/dashboard/MetricsPanel";
import OperationalStatusPanel from "@/components/dashboard/OperationalStatusPanel";
import DeploymentRunbookPanel from "@/components/architecture/DeploymentRunbookPanel";
import DeploymentFlowPanel from "@/components/architecture/DeploymentFlowPanel";
import ArchitectureLegend from "@/components/architecture/ArchitectureLegend";
import RecommendationsPanel from "@/components/architecture/RecommendationsPanel";

import LiveTelemetryPanel from "@/components/LiveTelemetryPanel";
import DeploymentActivityFeed from "@/components/DeploymentActivityFeed";
import AIOperationalInsights from "@/components/AIOperationalInsights";
import InfrastructureAlertCenter from "@/components/InfrastructureAlertCenter";
import ProductionIncidentSimulator from "@/components/ProductionIncidentSimulator";
import DeploymentAnalyticsPanel from "@/components/DeploymentAnalyticsPanel";
import CloudProviderMetadataPanel from "@/components/CloudProviderMetadataPanel";
import InfrastructureStateSummary from "@/components/InfrastructureStateSummary";
import AIDeploymentRiskScore from "@/components/AIDeploymentRiskScore";
import ArchitecturePDFExportPanel from "@/components/ArchitecturePDFExportPanel";
import SaaSCommercializationPanel from "@/components/SaaSCommercializationPanel";

type SavedProject = {
  id: string;
  name: string;
  prompt: string;
  architecture: GeneratedArchitecture | null;
  created_at: string;
};

type SnapshotStatus =
  | "production"
  | "stable"
  | "rollback"
  | "experimental"
  | "recovery"
  | "review";

type ArchitectureSnapshot = {
  id: string;
  project_id: string;
  user_id: string;
  label: string;
  description: string | null;
  status: SnapshotStatus;
  change_summary: string[];
  architecture: GeneratedArchitecture;
  created_at: string;
};

function isValidArchitecture(value: unknown): value is GeneratedArchitecture {
  if (!value || typeof value !== "object") return false;

  const architecture = value as {
    nodes?: unknown;
    connections?: unknown;
  };

  return (
    Array.isArray(architecture.nodes) &&
    Array.isArray(architecture.connections)
  );
}

function cloneArchitecture(
  architecture: GeneratedArchitecture
): GeneratedArchitecture {
  return JSON.parse(JSON.stringify(architecture)) as GeneratedArchitecture;
}

function normalizeSnapshotStatus(status: unknown): SnapshotStatus {
  const allowedStatuses: SnapshotStatus[] = [
    "production",
    "stable",
    "rollback",
    "experimental",
    "recovery",
    "review",
  ];

  return allowedStatuses.includes(status as SnapshotStatus)
    ? (status as SnapshotStatus)
    : "stable";
}

function normalizeChangeSummary(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }

  return [];
}

function generateChangeSummary(
  current: GeneratedArchitecture,
  previous?: GeneratedArchitecture
) {
  if (!previous) {
    return ["Initial infrastructure baseline created"];
  }

  const changes: string[] = [];

  const currentNodes = current.nodes || [];
  const previousNodes = previous.nodes || [];
  const currentConnections = current.connections || [];
  const previousConnections = previous.connections || [];

  const nodeDelta = currentNodes.length - previousNodes.length;
  const connectionDelta =
    currentConnections.length - previousConnections.length;

  if (nodeDelta > 0) {
    changes.push(`+${nodeDelta} infrastructure services added`);
  }

  if (nodeDelta < 0) {
    changes.push(`${Math.abs(nodeDelta)} infrastructure services removed`);
  }

  if (connectionDelta > 0) {
    changes.push(`+${connectionDelta} infrastructure links added`);
  }

  if (connectionDelta < 0) {
    changes.push(`${Math.abs(connectionDelta)} infrastructure links removed`);
  }

  const previousLabels = new Set(previousNodes.map((node) => node.label));

  currentNodes.forEach((node) => {
    if (!previousLabels.has(node.label)) {
      changes.push(`${node.label} introduced`);
    }
  });

  if (changes.length === 0) {
    changes.push("No major infrastructure changes detected");
  }

  return changes;
}

function getSnapshotBadgeClass(status: SnapshotStatus) {
  if (status === "production") {
    return "border-emerald-400/20 bg-emerald-500/20 text-emerald-300";
  }

  if (status === "rollback") {
    return "border-red-400/20 bg-red-500/20 text-red-300";
  }

  if (status === "experimental") {
    return "border-yellow-400/20 bg-yellow-500/20 text-yellow-300";
  }

  if (status === "recovery") {
    return "border-cyan-400/20 bg-cyan-500/20 text-cyan-300";
  }

  if (status === "review") {
    return "border-pink-400/20 bg-pink-500/20 text-pink-300";
  }

  return "border-purple-400/20 bg-purple-500/20 text-purple-300";
}

function getRestoreMessage(snapshot: ArchitectureSnapshot) {
  if (snapshot.status === "production") {
    return `Production snapshot restored: ${snapshot.label}. Workspace synchronized with a stable infrastructure state.`;
  }

  if (snapshot.status === "rollback") {
    return `Rollback point restored: ${snapshot.label}. Previous topology state recovered successfully.`;
  }

  if (snapshot.status === "recovery") {
    return `Recovery snapshot restored: ${snapshot.label}. Infrastructure state synchronized.`;
  }

  if (snapshot.status === "experimental") {
    return `Experimental snapshot restored: ${snapshot.label}. Review changes before updating the workspace.`;
  }

  if (snapshot.status === "review") {
    return `Client review snapshot restored: ${snapshot.label}. Workspace ready for inspection.`;
  }

  return `Stable snapshot restored: ${snapshot.label}. Topology refresh completed.`;
}

export default function DashboardShell() {
  const branding = getTenantBranding();

  const [architecture, setArchitecture] =
    useState<GeneratedArchitecture>(mockArchitecture);

  const [canvasVersion, setCanvasVersion] = useState(0);

  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [activeProjectName, setActiveProjectName] =
    useState<string>("Unsaved Workspace");

  const [workspaceMessage, setWorkspaceMessage] = useState("");
  const [isUpdatingWorkspace, setIsUpdatingWorkspace] = useState(false);

  const [snapshots, setSnapshots] = useState<ArchitectureSnapshot[]>([]);
  const [snapshotLabel, setSnapshotLabel] = useState("Stable Snapshot");
  const [snapshotDescription, setSnapshotDescription] = useState("");
  const [snapshotStatus, setSnapshotStatus] =
    useState<SnapshotStatus>("stable");

  const [isSavingSnapshot, setIsSavingSnapshot] = useState(false);
  const [isLoadingSnapshots, setIsLoadingSnapshots] = useState(false);

  useEffect(() => {
    if (activeProjectId) {
      loadSnapshots(activeProjectId);
    } else {
      setSnapshots([]);
    }
  }, [activeProjectId]);

  async function handleGenerate(prompt: string) {
    try {
      setIsGenerating(true);
      setError("");

      const response = await fetch("/api/generate-architecture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate architecture.");
      }

      if (!isValidArchitecture(data.architecture)) {
        throw new Error("Generated architecture returned an invalid shape.");
      }

      setArchitecture(cloneArchitecture(data.architecture));
      setCanvasVersion((current) => current + 1);

      setWorkspaceMessage(
        "AI infrastructure workspace updated with new generated architecture."
      );
    } catch (err) {
      console.error(err);
      setError(
        "Failed to generate architecture. Check your API key and server logs."
      );
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleUpdateWorkspace() {
    if (!activeProjectId) {
      setWorkspaceMessage(
        "Load an existing workspace before attempting to update it."
      );
      return;
    }

    try {
      setIsUpdatingWorkspace(true);
      setWorkspaceMessage("");

      const { error } = await supabase
        .from("architecture_projects")
        .update({
          architecture: architecture as any,
          prompt: activeProjectName || "Updated AI Architecture Workspace",
        })
        .eq("id", activeProjectId);

      if (error) throw error;

      setWorkspaceMessage(`Workspace synced successfully: ${activeProjectName}`);
    } catch (err) {
      console.error(err);
      setWorkspaceMessage("Failed to update workspace state in Supabase.");
    } finally {
      setIsUpdatingWorkspace(false);
    }
  }

  function handleLoadProject(project: SavedProject) {
    const restoredArchitecture = isValidArchitecture(project.architecture)
      ? cloneArchitecture(project.architecture)
      : cloneArchitecture(mockArchitecture);

    setArchitecture(restoredArchitecture);
    setCanvasVersion((current) => current + 1);
    setActiveProjectId(project.id);
    setActiveProjectName(project.name);

    if (isValidArchitecture(project.architecture)) {
      setWorkspaceMessage(`Active workspace loaded: ${project.name}`);
    } else {
      setWorkspaceMessage(
        `Active workspace loaded: ${project.name}. This older saved workspace had missing architecture data, so the default ${branding.companyName} intelligence workspace was restored safely.`
      );
    }
  }

  async function loadSnapshots(projectId: string) {
    try {
      setIsLoadingSnapshots(true);

      const { data, error } = await supabase
        .from("architecture_snapshots")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const validSnapshots = (data || [])
        .filter((snapshot) => isValidArchitecture(snapshot.architecture))
        .map((snapshot) => ({
          ...snapshot,
          status: normalizeSnapshotStatus(snapshot.status),
          change_summary: normalizeChangeSummary(snapshot.change_summary),
        })) as ArchitectureSnapshot[];

      setSnapshots(validSnapshots);
    } catch (err) {
      console.error(err);
      setWorkspaceMessage("Failed to load workspace version history.");
    } finally {
      setIsLoadingSnapshots(false);
    }
  }

  async function handleSaveSnapshot() {
    if (!activeProjectId) {
      setWorkspaceMessage("Load or save a workspace before creating snapshots.");
      return;
    }

    try {
      setIsSavingSnapshot(true);
      setWorkspaceMessage("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("No authenticated user found.");
      }

      const previousSnapshot = snapshots.length > 0 ? snapshots[0] : null;

      const changeSummary = generateChangeSummary(
        architecture,
        previousSnapshot?.architecture
      );

      const { error } = await supabase.from("architecture_snapshots").insert({
        project_id: activeProjectId,
        user_id: user.id,
        label: snapshotLabel || "Architecture Snapshot",
        description: snapshotDescription || null,
        status: snapshotStatus,
        change_summary: changeSummary,
        architecture: architecture as any,
      });

      if (error) throw error;

      setSnapshotLabel("Stable Snapshot");
      setSnapshotDescription("");
      setSnapshotStatus("stable");
      setWorkspaceMessage("Architecture snapshot saved with version intelligence.");

      await loadSnapshots(activeProjectId);
    } catch (err) {
      console.error(err);
      setWorkspaceMessage(
        "Failed to save architecture snapshot. Confirm the status and change_summary columns exist in Supabase."
      );
    } finally {
      setIsSavingSnapshot(false);
    }
  }

  async function handleDeleteSnapshot(snapshotId: string) {
    try {
      const confirmed = window.confirm("Delete this infrastructure snapshot?");

      if (!confirmed) return;

      const { error } = await supabase
        .from("architecture_snapshots")
        .delete()
        .eq("id", snapshotId);

      if (error) throw error;

      setSnapshots((current) =>
        current.filter((snapshot) => snapshot.id !== snapshotId)
      );

      setWorkspaceMessage("Infrastructure snapshot deleted successfully.");
    } catch (err) {
      console.error(err);
      setWorkspaceMessage("Failed to delete infrastructure snapshot.");
    }
  }

  function handleRestoreSnapshot(snapshot: ArchitectureSnapshot) {
    if (!isValidArchitecture(snapshot.architecture)) {
      setWorkspaceMessage(
        "This snapshot could not be restored because its architecture data is invalid."
      );
      return;
    }

    const restoredArchitecture = cloneArchitecture(snapshot.architecture);

    setArchitecture(restoredArchitecture);
    setCanvasVersion((current) => current + 1);
    setWorkspaceMessage(getRestoreMessage(snapshot));
  }

  const costAnalysis = analyzeInfrastructureCosts(architecture);

  const multiCloudAnalysis = analyzeMultiCloudArchitecture(architecture);

  const deploymentAnalysis = analyzeDeploymentStrategy(architecture);

  const executiveOperations = generateExecutiveOperationsIntelligence();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <header className="mb-6">
          <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {branding.companyName} Intelligence Engine Online
          </div>

          <p className="text-sm text-cyan-400">
            {branding.companyName} Platform
          </p>

          <h1 className="text-3xl font-bold">
            AI-Powered Executive Infrastructure Intelligence Platform
          </h1>

          <p className="mt-2 max-w-2xl text-slate-400">
            Transform operational infrastructure data into executive intelligence,
            readiness scoring, governance visibility, commercialization insights,
            architecture analysis, and AI-powered decision support.
          </p>
        </header>

        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Workspace Management Active
              </div>

              <h2 className="text-lg font-semibold text-white">
                {activeProjectName}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Active enterprise infrastructure workspace lifecycle.
              </p>
            </div>

            <button
              onClick={handleUpdateWorkspace}
              disabled={!activeProjectId || isUpdatingWorkspace}
              className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isUpdatingWorkspace
                ? "Updating Workspace..."
                : "Update Current Workspace"}
            </button>
          </div>

          {workspaceMessage && (
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-300">
              {workspaceMessage}
            </div>
          )}
        </section>

        <AuthPanel />

        <SavedProjectsPanel
          architecture={architecture}
          onLoadProject={handleLoadProject}
        />

        <div className="mt-6 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="xl:sticky xl:top-6 xl:self-start">
            <EnterpriseCommandNavigation />
          </div>

          <div className="min-w-0 space-y-6">
            <ExecutivePlatformBanner />

            <EnterpriseVisualRefinementSystem />

            <EnterpriseVisualHierarchyCalibration />

            <AIExecutiveIntelligenceEngine />

            <AIExecutiveRecommendationFeed />

            <AutonomousInfrastructureInsightPanel />

            <ExecutiveArchitectureScoringPanel />

            <AIModernizationAdvisoryEngine />

            <DeploymentRiskPredictionPanel />

            <AutonomousIncidentCorrelationEngine />

            <AIInfrastructureOptimizationCommandCenter />

            <ExecutiveComplianceIntelligencePanel />

            <AIExecutiveOperationsTimeline />

            <ExecutiveROIIntelligencePanel />

            <AutonomousAICommandCenter />

            <ExecutiveMultiCloudIntelligenceGrid />

            <ExecutiveAICopilotLayer />

            <AutonomousWorkflowIntelligenceEngine />

            <FinalExecutivePresentationLayer />

            <ExecutiveCommandRibbon />

            <EnterpriseOperationsConsole data={executiveOperations} />

            <ExecutiveIntelligenceZones />

            <ExecutiveSystemTabs />

            <ExecutiveLayoutRhythmSystem />

            <OperationalCommandGrid />

            <ExecutiveDensityOptimizationSystem />

            <ExecutiveAIActivityLayer />

            <AdaptiveExecutiveWorkspace />

            <ContextualAIWorkspace />

            <ExecutiveAIControlPanel />

            <ExecutiveBreathingSpaceSystem />

            <EnterpriseLaunchReadinessPanel />

            <PortfolioPresentationMode />

            <MonetizationPositioningStrip />

            <EnterprisePremiumFinishLayer />

            <FinalExecutiveReadinessBanner />

            <section className="mb-6 rounded-2xl border border-purple-500/20 bg-slate-900/70 p-5 shadow-2xl">
              <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="mb-2 inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-300">
                    Workspace Version Intelligence
                  </div>

                  <h2 className="text-lg font-semibold text-white">
                    Architecture Snapshot History
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Capture stable versions, restore previous infrastructure states,
                    track changes, and manage workspace evolution.
                  </p>
                </div>

                <div className="text-sm text-slate-400">
                  {snapshots.length} saved version{snapshots.length === 1 ? "" : "s"}
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 lg:col-span-1">
                  <h3 className="text-sm font-semibold text-white">
                    Save New Snapshot
                  </h3>

                  <input
                    value={snapshotLabel}
                    onChange={(event) => setSnapshotLabel(event.target.value)}
                    placeholder="Snapshot label"
                    className="mt-4 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400"
                  />

                  <select
                    value={snapshotStatus}
                    onChange={(event) =>
                      setSnapshotStatus(event.target.value as SnapshotStatus)
                    }
                    className="mt-3 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400"
                  >
                    <option value="stable">Stable</option>
                    <option value="production">Production</option>
                    <option value="rollback">Rollback Point</option>
                    <option value="experimental">Experimental</option>
                    <option value="recovery">Recovery</option>
                    <option value="review">Client Review</option>
                  </select>

                  <textarea
                    value={snapshotDescription}
                    onChange={(event) =>
                      setSnapshotDescription(event.target.value)
                    }
                    placeholder="Optional snapshot notes"
                    rows={3}
                    className="mt-3 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400"
                  />

                  <button
                    onClick={handleSaveSnapshot}
                    disabled={!activeProjectId || isSavingSnapshot}
                    className="mt-4 w-full rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isSavingSnapshot ? "Saving Snapshot..." : "Save Snapshot"}
                  </button>

                  {!activeProjectId && (
                    <p className="mt-3 text-xs text-slate-500">
                      Load a saved workspace before creating version snapshots.
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 lg:col-span-2">
                  <h3 className="text-sm font-semibold text-white">
                    Version Timeline
                  </h3>

                  {isLoadingSnapshots && (
                    <p className="mt-4 text-sm text-slate-400">
                      Loading workspace version history...
                    </p>
                  )}

                  {!isLoadingSnapshots && snapshots.length === 0 && (
                    <div className="mt-4 rounded-xl border border-dashed border-slate-800 p-5 text-sm text-slate-400">
                      No snapshots saved yet. Create a snapshot to begin tracking
                      architecture version history.
                    </div>
                  )}

                  <div className="mt-4 space-y-3">
                    {snapshots.map((snapshot) => (
                      <div
                        key={snapshot.id}
                        className="rounded-xl border border-slate-800 bg-slate-900/80 p-4"
                      >
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-semibold text-white">
                                {snapshot.label}
                              </h4>

                              <span
                                className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${getSnapshotBadgeClass(
                                  snapshot.status
                                )}`}
                              >
                                {snapshot.status}
                              </span>

                              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300">
                                {snapshot.architecture.nodes.length} nodes
                              </span>

                              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300">
                                {snapshot.architecture.connections.length} links
                              </span>
                            </div>

                            <p className="mt-1 text-xs text-slate-500">
                              {new Date(snapshot.created_at).toLocaleString()}
                            </p>

                            {snapshot.change_summary.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {snapshot.change_summary.map((change, index) => (
                                  <span
                                    key={index}
                                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[11px] text-cyan-300"
                                  >
                                    {change}
                                  </span>
                                ))}
                              </div>
                            )}

                            {snapshot.description && (
                              <p className="mt-3 text-sm text-slate-400">
                                {snapshot.description}
                              </p>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleRestoreSnapshot(snapshot)}
                              className="rounded-xl border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm font-semibold text-purple-300 transition hover:bg-purple-400/20"
                            >
                              Restore Version
                            </button>

                            <button
                              onClick={() => handleDeleteSnapshot(snapshot.id)}
                              className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <SnapshotComparePanel snapshots={snapshots} />

            <PromptInputPanel
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />

            {error && (
              <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                {error}
              </div>
            )}

            <ArchitectureCanvas
              key={`${activeProjectId || "unsaved"}-${canvasVersion}`}
              architecture={architecture}
            />

            <InfrastructureGovernancePanel architecture={architecture} />

            <InfrastructureRecommendationsPanel architecture={architecture} />

            <InfrastructureCostDashboard analysis={costAnalysis} />

            <MultiCloudIntelligenceDashboard analysis={multiCloudAnalysis} />

            <DeploymentStrategyDashboard analysis={deploymentAnalysis} />

            <TelemetryIntelligenceDashboard architecture={architecture} />

            <OperationsCommandCenter architecture={architecture} />

            <InfrastructureHeatmap architecture={architecture} />

            <ThreatIntelligenceDashboard architecture={architecture} />

            <MetricsPanel architecture={architecture} />

            <OperationalStatusPanel architecture={architecture} />

            <InfrastructureInsightsPanel architecture={architecture} />

            <InfrastructureStateSummary />

            <AIDeploymentRiskScore />

            <CloudProviderMetadataPanel />

            <DeploymentAnalyticsPanel />

            <DeploymentActivityFeed />

            <LiveTelemetryPanel />

            <InfrastructureAlertCenter />

            <ProductionIncidentSimulator />

            <AIOperationalInsights />

            <StackOverviewPanel architecture={architecture} />

            <NodeInventoryPanel architecture={architecture} />

            <ConnectionMatrixPanel architecture={architecture} />

            <DeploymentFlowPanel architecture={architecture} />

            <DeploymentRunbookPanel architecture={architecture} />

            <RecommendationsPanel architecture={architecture} />

            <ArchitectureLegend />

            <ArchitectureReportPanel architecture={architecture} />

            <ExportActions architecture={architecture} />

            <ArchitecturePDFExportPanel />

            <SaaSCommercializationPanel />
          </div>
        </div>
      </div>
    </main>
  );
}