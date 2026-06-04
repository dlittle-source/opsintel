"use client";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Database,
  Gauge,
  Globe,
  Network,
  Radar,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const cloudProviders = [
  {
    provider: "AWS",
    status: "Optimal",
    cost: "$48.2K/mo",
    utilization: "91%",
    risk: "Low",
    color:
      "border-orange-400/20 bg-orange-400/10 text-orange-300",
  },
  {
    provider: "Azure",
    status: "Stable",
    cost: "$31.4K/mo",
    utilization: "84%",
    risk: "Moderate",
    color:
      "border-sky-400/20 bg-sky-400/10 text-sky-300",
  },
  {
    provider: "GCP",
    status: "Efficient",
    cost: "$22.9K/mo",
    utilization: "88%",
    risk: "Low",
    color:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  },
];

const intelligenceMetrics = [
  {
    label: "Cross-Cloud Stability",
    value: "94%",
  },
  {
    label: "Operational Efficiency",
    value: "89%",
  },
  {
    label: "Hybrid Governance Score",
    value: "92%",
  },
];

const advisorySignals = [
  {
    icon: Network,
    label: "Cross-cloud traffic balancing active",
  },
  {
    icon: ShieldCheck,
    label: "Unified governance enforcement stable",
  },
  {
    icon: Database,
    label: "Distributed storage replication healthy",
  },
  {
    icon: Server,
    label: "Compute orchestration synchronized",
  },
];

export default function ExecutiveMultiCloudIntelligenceGrid() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_90px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <Cloud className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              Enterprise Multi-Cloud Intelligence
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Executive Multi-Cloud Intelligence Grid
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              Unified AWS, Azure, and GCP operational intelligence with
              executive governance visibility, hybrid-cloud optimization,
              provider risk analysis, and enterprise infrastructure advisory.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Multi-Cloud Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              Hybrid infrastructure operating within optimal thresholds
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {intelligenceMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">
                  {metric.label}
                </div>

                <div className="mt-4 text-4xl font-semibold text-white">
                  {metric.value}
                </div>
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                <TrendingUp className="h-5 w-5 text-cyan-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-cyan-300">
              <Activity className="h-4 w-4" />
              Executive cloud intelligence active
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Cloud Provider Intelligence
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Executive operational visibility across enterprise cloud environments.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {cloudProviders.map((provider) => (
              <div
                key={provider.provider}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-cyan-400/20"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-2xl border px-4 py-2 text-sm font-medium ${provider.color}`}
                      >
                        {provider.provider}
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {provider.status}
                        </div>

                        <div className="mt-1 text-sm text-slate-400">
                          Hybrid operational intelligence active
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs uppercase tracking-wide text-slate-500">
                          Monthly Cost
                        </div>

                        <div className="mt-2 text-xl font-semibold text-white">
                          {provider.cost}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs uppercase tracking-wide text-slate-500">
                          Utilization
                        </div>

                        <div className="mt-2 text-xl font-semibold text-white">
                          {provider.utilization}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs uppercase tracking-wide text-slate-500">
                          Risk Profile
                        </div>

                        <div className="mt-2 text-xl font-semibold text-white">
                          {provider.risk}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                    Open Cloud Analysis
                    <ArrowRight className="h-4 w-4" />
                  </button>
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
                  Hybrid Governance Signals
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Active cross-cloud operational indicators.
                </p>
              </div>

              <Gauge className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-4">
              {advisorySignals.map((signal) => (
                <div
                  key={signal.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <signal.icon className="h-4 w-4 text-cyan-300" />

                    <span className="text-sm text-slate-300">
                      {signal.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />

                    <span className="text-xs font-medium">
                      Stable
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-emerald-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3">
                <Globe className="h-5 w-5 text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Cloud Narrative
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated hybrid-cloud advisory
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                AI multi-cloud intelligence models indicate strong operational
                stability across AWS, Azure, and GCP infrastructure domains.
                Current governance posture supports enterprise resiliency,
                distributed workload balancing, and procurement flexibility
                while minimizing provider concentration risk exposure.
              </p>

              <div className="mt-5 flex items-center gap-2 text-cyan-300">
                <Radar className="h-4 w-4" />

                <span className="text-xs uppercase tracking-[0.18em]">
                  Enterprise hybrid-cloud intelligence active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}