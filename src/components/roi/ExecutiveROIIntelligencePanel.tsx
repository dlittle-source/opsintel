"use client";

import {
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Gauge,
  PiggyBank,
  Rocket,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";

const roiMetrics = [
  { label: "Projected Annual Savings", value: "$221K", trend: "+24%" },
  { label: "Operational Efficiency Gain", value: "41%", trend: "+18%" },
  { label: "Executive ROI Confidence", value: "94%", trend: "Strong" },
];

const valueDrivers = [
  {
    title: "Reduced Cloud Waste",
    impact: "$92K annual value",
    description:
      "AI optimization models identify over-provisioned infrastructure, idle compute, and inefficient scaling policies that can be corrected before cost leakage compounds.",
  },
  {
    title: "Faster Incident Resolution",
    impact: "$68K annual value",
    description:
      "Autonomous incident correlation reduces troubleshooting time by connecting deployment events, telemetry anomalies, and service dependencies into one executive narrative.",
  },
  {
    title: "Deployment Risk Reduction",
    impact: "$61K annual value",
    description:
      "Predictive deployment intelligence lowers rollback exposure, production instability risk, and engineering time lost to preventable release failures.",
  },
];

const businessSignals = [
  "White-label SaaS positioning",
  "Executive buyer-ready value narrative",
  "Operational cost reduction story",
  "Enterprise governance credibility",
  "Portfolio monetization readiness",
];

export default function ExecutiveROIIntelligencePanel() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.10),transparent_30%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <CircleDollarSign className="h-7 w-7 text-emerald-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Executive ROI Intelligence Panel
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              AI-generated business value forecasting, operational savings
              analysis, infrastructure ROI intelligence, and executive
              monetization positioning.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Business Value Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              Executive ROI narrative ready for enterprise buyer conversations
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {roiMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">{metric.label}</div>

                <div className="mt-4 text-4xl font-semibold text-white">
                  {metric.value}
                </div>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2">
                <TrendingUp className="h-5 w-5 text-emerald-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-300">
              <Sparkles className="h-4 w-4" />
              {metric.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                AI Business Value Drivers
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Executive-facing financial impact mapped to infrastructure
                intelligence outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-emerald-300" />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {valueDrivers.map((driver) => (
              <div
                key={driver.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-emerald-400/20"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3">
                        <BadgeDollarSign className="h-5 w-5 text-emerald-300" />
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {driver.title}
                        </div>

                        <div className="mt-1 text-sm text-slate-400">
                          {driver.impact}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-300">
                      {driver.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3 text-sm font-medium text-yellow-300">
                    ROI Driver
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Monetization Intelligence
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Buyer-facing business signals.
                </p>
              </div>

              <BriefcaseBusiness className="h-5 w-5 text-emerald-300" />
            </div>

            <div className="mt-6 space-y-4">
              {businessSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />

                    <span className="text-sm text-slate-300">{signal}</span>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Ready
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-yellow-500/10 to-cyan-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-3">
                <PiggyBank className="h-5 w-5 text-yellow-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Value Narrative
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated monetization storyline
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                AI ROI analysis positions this platform as an executive
                infrastructure intelligence system capable of reducing cloud
                waste, improving deployment confidence, accelerating incident
                response, and strengthening governance visibility. This creates
                a strong foundation for enterprise demos, portfolio
                differentiation, consulting offers, and future white-label SaaS
                packaging.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 hover:bg-emerald-400/20">
                Open ROI Report
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}