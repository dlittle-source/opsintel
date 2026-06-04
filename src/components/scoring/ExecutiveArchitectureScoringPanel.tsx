"use client";

import {
  Award,
  BarChart3,
  CheckCircle2,
  Gauge,
  Layers3,
  Radar,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const scoreCards = [
  { label: "Production Readiness", value: "94%", status: "Strong" },
  { label: "Architecture Quality", value: "91%", status: "Stable" },
  { label: "Enterprise Confidence", value: "96%", status: "Ready" },
];

const scoringFactors = [
  "Deployment resilience",
  "Scalability posture",
  "Security governance",
  "Operational observability",
  "Cloud cost maturity",
];

export default function ExecutiveArchitectureScoringPanel() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_35%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <Award className="h-7 w-7 text-emerald-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Executive Architecture Scoring Panel
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              Executive-grade architecture scoring across readiness,
              scalability, security, observability, and operational maturity.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Scoring Status
            </div>
            <div className="text-sm font-medium text-emerald-100">
              Architecture score stable
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {scoreCards.map((score) => (
          <div
            key={score.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">{score.label}</div>
                <div className="mt-4 text-4xl font-semibold text-white">
                  {score.value}
                </div>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2">
                <Gauge className="h-5 w-5 text-emerald-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-300">
              <Sparkles className="h-4 w-4" />
              {score.status}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-emerald-300" />
            <h3 className="text-lg font-semibold text-white">
              Architecture Score Factors
            </h3>
          </div>

          <div className="mt-6 space-y-4">
            {scoringFactors.map((factor) => (
              <div
                key={factor}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <Layers3 className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm text-slate-300">{factor}</span>
                </div>

                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Passed
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6">
          <div className="flex items-center gap-3">
            <Radar className="h-5 w-5 text-cyan-300" />
            <h3 className="text-lg font-semibold text-white">
              Executive Scoring Narrative
            </h3>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            Architecture scoring indicates strong production readiness,
            enterprise-grade operational maturity, and a credible foundation for
            executive demos, portfolio presentation, and future SaaS expansion.
          </p>

          <div className="mt-6 flex items-center gap-2 text-emerald-300">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.18em]">
              Enterprise architecture maturity verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}