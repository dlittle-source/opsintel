"use client";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Cpu,
  Gauge,
  Layers3,
  RefreshCcw,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

const modernizationItems = [
  {
    title: "Container Platform Modernization",
    impact: "High Impact",
    description:
      "AI recommends strengthening container orchestration, autoscaling policy, and deployment rollout controls.",
  },
  {
    title: "Infrastructure Automation Expansion",
    impact: "Medium Impact",
    description:
      "Introduce deeper IaC workflow coverage to improve repeatability, governance, and production consistency.",
  },
  {
    title: "Cloud Architecture Optimization",
    impact: "Strategic Impact",
    description:
      "Modernize cloud resource allocation and reduce architectural friction across scaling and availability paths.",
  },
];

export default function AIModernizationAdvisoryEngine() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-4">
            <CloudCog className="h-7 w-7 text-purple-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              AI Modernization Advisory Engine
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              AI-powered modernization guidance for cloud architecture,
              deployment maturity, infrastructure automation, and enterprise
              scalability.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Modernization Status
            </div>
            <div className="text-sm font-medium text-emerald-100">
              Advisory engine active
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <BrainCircuit className="h-5 w-5 text-purple-300" />
            <h3 className="text-lg font-semibold text-white">
              Modernization Recommendations
            </h3>
          </div>

          <div className="mt-6 space-y-5">
            {modernizationItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5"
              >
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-cyan-300" />
                      <h4 className="text-lg font-medium text-white">
                        {item.title}
                      </h4>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 text-sm font-medium text-purple-300">
                    {item.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">
              Modernization Domains
            </h3>

            <div className="mt-6 space-y-4">
              {[
                { icon: Cpu, label: "Compute modernization" },
                { icon: Layers3, label: "Architecture refactoring" },
                { icon: RefreshCcw, label: "Automation workflow maturity" },
                { icon: Rocket, label: "Deployment acceleration" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-cyan-300" />
                    <span className="text-sm text-slate-300">
                      {item.label}
                    </span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
            <div className="flex items-center gap-3">
              <Gauge className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">
                Executive Modernization Narrative
              </h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              AI modernization analysis shows strong potential for improving
              deployment maturity, cloud efficiency, and architecture
              scalability through automation and operational standardization.
            </p>

            <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Open Modernization Report
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}