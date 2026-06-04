"use client";

import {
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  Gauge,
  Radar,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { getWorkspaceIntelligenceAggregation } from "@/lib/workspaceIntelligenceAggregator";

function getStatusLabel(score: number) {
  if (score >= 90) return "Executive Ready";
  if (score >= 80) return "Stable";
  if (score >= 70) return "Needs Review";
  return "Attention Required";
}

function formatWorkspaceName(workspace: string) {
  return workspace
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function AIExecutiveIntelligenceEngine() {
  const aggregation = getWorkspaceIntelligenceAggregation();

  const executiveSignals = [
    {
      label: "Platform Health Index",
      value: `${aggregation.platformScore}%`,
      status: getStatusLabel(aggregation.platformScore),
    },
    {
      label: "Cost Intelligence Signals",
      value: `${aggregation.costSignals.length}`,
      status:
        aggregation.costSignals.length > 0
          ? "Optimization Available"
          : "Cost Posture Stable",
    },
    {
      label: "Deployment Readiness Signals",
      value: `${aggregation.deploymentSignals.length}`,
      status:
        aggregation.deploymentSignals.length > 0
          ? "Release Review Needed"
          : "Deployment Ready",
    },
  ];

  const primarySignal = aggregation.executiveSignals[0];

  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <BrainCircuit className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              AI Executive Intelligence Engine
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              Dynamic executive intelligence across architecture posture,
              operational readiness, cost efficiency, governance risk, and
              platform-level decision support.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Intelligence Status
            </div>
            <div className="text-sm font-medium text-emerald-100">
              Aggregating {aggregation.workspaces.length} executive workspaces
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {executiveSignals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">{signal.label}</div>
                <div className="mt-4 text-4xl font-semibold text-white">
                  {signal.value}
                </div>
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                <Radar className="h-5 w-5 text-cyan-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-cyan-300">
              <Sparkles className="h-4 w-4" />
              {signal.status}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Gauge className="h-5 w-5 text-cyan-300" />
            <h3 className="text-lg font-semibold text-white">
              Executive Advisory Summary
            </h3>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {primarySignal
              ? primarySignal.summary
              : "AI intelligence models indicate strong enterprise readiness with clear operational value across deployment safety, modernization planning, infrastructure visibility, and executive decision-making."}
          </p>

          <div className="mt-5 flex items-center gap-2 text-cyan-300">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.18em]">
              Strategic infrastructure intelligence active
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-400/10 bg-amber-400/5 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-300" />
            <h3 className="text-lg font-semibold text-white">
              Workspace Attention
            </h3>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Strongest Workspace
              </div>
              <div className="mt-1 text-sm font-medium text-emerald-300">
                {formatWorkspaceName(aggregation.strongestWorkspace)}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Needs Attention
              </div>
              <div className="mt-1 text-sm font-medium text-amber-300">
                {formatWorkspaceName(aggregation.weakestWorkspace)}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Platform Risk
              </div>
              <div className="mt-1 text-sm font-medium text-cyan-300">
                {aggregation.platformRiskPosture.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}