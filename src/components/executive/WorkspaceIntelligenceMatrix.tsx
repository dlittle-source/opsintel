import { Activity, BarChart3, ShieldCheck, Zap } from "lucide-react";

import { getWorkspaceIntelligenceAggregation } from "@/lib/workspaceIntelligenceAggregator";

function formatWorkspaceName(workspace: string) {
  return workspace
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getScoreColor(score: number) {
  if (score >= 90) return "text-emerald-300";
  if (score >= 80) return "text-cyan-300";
  if (score >= 70) return "text-amber-300";
  return "text-red-300";
}

export default function WorkspaceIntelligenceMatrix() {
  const aggregation = getWorkspaceIntelligenceAggregation();

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">
            Platform Intelligence Matrix
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Workspace Intelligence Matrix
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            Aggregated readiness, deployment, cost, operations, and governance
            intelligence across the executive workspace ecosystem.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
          {aggregation.workspaces.length} workspaces monitored
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
        <div className="grid grid-cols-6 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.16em] text-slate-500">
          <div>Workspace</div>
          <div>Readiness</div>
          <div>Deploy</div>
          <div>Cost</div>
          <div>Ops</div>
          <div>Governance</div>
        </div>

        <div className="divide-y divide-white/10">
          {aggregation.workspaces.map((workspace) => (
            <div
              key={workspace.workspace}
              className="grid grid-cols-6 items-center px-4 py-4 text-sm transition hover:bg-white/[0.04]"
            >
              <div className="font-medium text-white">
                {formatWorkspaceName(workspace.workspace)}
              </div>

              <div className={getScoreColor(workspace.readinessScore)}>
                {workspace.readinessScore}%
              </div>

              <div className={getScoreColor(workspace.deploymentReadiness)}>
                {workspace.deploymentReadiness}%
              </div>

              <div className={getScoreColor(workspace.costEfficiency)}>
                {workspace.costEfficiency}%
              </div>

              <div className={getScoreColor(workspace.operationalHealth)}>
                {workspace.operationalHealth}%
              </div>

              <div className={getScoreColor(workspace.governanceScore)}>
                {workspace.governanceScore}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <Activity className="h-5 w-5 text-cyan-300" />
          <div className="mt-3 text-sm text-slate-400">Platform Score</div>
          <div className="mt-1 text-2xl font-semibold text-white">
            {aggregation.platformScore}%
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <Zap className="h-5 w-5 text-amber-300" />
          <div className="mt-3 text-sm text-slate-400">Deployment Signals</div>
          <div className="mt-1 text-2xl font-semibold text-white">
            {aggregation.deploymentSignals.length}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <BarChart3 className="h-5 w-5 text-emerald-300" />
          <div className="mt-3 text-sm text-slate-400">Cost Signals</div>
          <div className="mt-1 text-2xl font-semibold text-white">
            {aggregation.costSignals.length}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <ShieldCheck className="h-5 w-5 text-violet-300" />
          <div className="mt-3 text-sm text-slate-400">Governance Signals</div>
          <div className="mt-1 text-2xl font-semibold text-white">
            {aggregation.governanceSignals.length}
          </div>
        </div>
      </div>
    </section>
  );
}