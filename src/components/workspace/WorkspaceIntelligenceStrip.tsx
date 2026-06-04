import { Activity, BarChart3, ShieldAlert, Zap } from "lucide-react";

import { getWorkspaceIntelligenceDistribution } from "@/lib/intelligenceDistributionEngine";

function formatWorkspaceName(workspace: string) {
  return workspace
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function WorkspaceIntelligenceStrip() {
  const intelligence = getWorkspaceIntelligenceDistribution();

  return (
    <section className="grid gap-4 md:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
        <Activity className="h-5 w-5 text-cyan-300" />
        <div className="mt-3 text-sm text-slate-400">Platform Score</div>
        <div className="mt-1 text-2xl font-semibold text-white">
          {intelligence.platformScore}%
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
        <ShieldAlert className="h-5 w-5 text-amber-300" />
        <div className="mt-3 text-sm text-slate-400">Platform Risk</div>
        <div className="mt-1 text-2xl font-semibold text-white capitalize">
          {intelligence.platformRiskPosture}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
        <Zap className="h-5 w-5 text-emerald-300" />
        <div className="mt-3 text-sm text-slate-400">Strongest Workspace</div>
        <div className="mt-1 text-lg font-semibold text-white">
          {formatWorkspaceName(intelligence.strongestWorkspace)}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
        <BarChart3 className="h-5 w-5 text-violet-300" />
        <div className="mt-3 text-sm text-slate-400">Needs Attention</div>
        <div className="mt-1 text-lg font-semibold text-white">
          {formatWorkspaceName(intelligence.weakestWorkspace)}
        </div>
      </div>
    </section>
  );
}