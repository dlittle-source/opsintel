"use client";

import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Gauge,
  Layers3,
  LineChart,
  PiggyBank,
  Rocket,
  Server,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";

const optimizationSignals = [
  {
    label: "Projected Monthly Savings",
    value: "$18.4K",
    trend: "24% reduction",
  },
  {
    label: "Compute Efficiency Gain",
    value: "37%",
    trend: "rightsizing active",
  },
  {
    label: "Scaling Confidence",
    value: "93%",
    trend: "optimized",
  },
];

const recommendations = [
  {
    title: "Rightsize Over-Provisioned Compute",
    impact: "High Financial Impact",
    savings: "$9.2K/mo",
    description:
      "AI detected sustained low CPU utilization across container workloads. Recommend reducing instance class size and introducing autoscaling thresholds.",
  },
  {
    title: "Optimize Database Read Strategy",
    impact: "Performance + Cost",
    savings: "$4.7K/mo",
    description:
      "Telemetry suggests read-heavy database access patterns. Introduce read replicas and query caching to reduce primary database pressure.",
  },
  {
    title: "Improve Container Scaling Policy",
    impact: "Operational Efficiency",
    savings: "$4.5K/mo",
    description:
      "Current scaling behavior reacts late under burst traffic. Recommend predictive scaling based on historical telemetry and deployment windows.",
  },
];

export default function AIInfrastructureOptimizationCommandCenter() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.10),transparent_30%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <BrainCircuit className="h-7 w-7 text-emerald-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              AI Infrastructure Optimization Command Center
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              Autonomous cloud cost optimization, performance tuning,
              infrastructure rightsizing, scaling intelligence, and executive
              efficiency advisory.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Optimization Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              AI efficiency engine actively improving infrastructure posture
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {optimizationSignals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">{signal.label}</div>
                <div className="mt-4 text-4xl font-semibold text-white">
                  {signal.value}
                </div>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2">
                <TrendingDown className="h-5 w-5 text-emerald-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-300">
              <Sparkles className="h-4 w-4" />
              {signal.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                AI Optimization Recommendations
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Executive-grade recommendations based on cost, performance, and
                operational efficiency signals.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
              <PiggyBank className="h-5 w-5 text-emerald-300" />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {recommendations.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-emerald-400/20"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3">
                        <Zap className="h-5 w-5 text-emerald-300" />
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {item.title}
                        </div>

                        <div className="mt-1 text-sm text-slate-400">
                          {item.impact}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
                    {item.savings}
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
                  Efficiency Intelligence
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Active optimization domains.
                </p>
              </div>

              <Gauge className="h-5 w-5 text-emerald-300" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                { icon: Cpu, label: "Compute Rightsizing" },
                { icon: Server, label: "Container Utilization Analysis" },
                { icon: Activity, label: "Telemetry-Based Scaling" },
                { icon: Layers3, label: "Architecture Efficiency Mapping" },
                { icon: LineChart, label: "Cost Trend Forecasting" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-emerald-300" />
                    <span className="text-sm text-slate-300">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-medium">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <Rocket className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Optimization Summary
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated infrastructure efficiency narrative
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                AI optimization models identified meaningful cost reduction
                opportunities across compute, database, and scaling policies.
                The current architecture is operationally stable but financially
                over-provisioned in several workload areas. Recommended actions
                focus on rightsizing compute, improving autoscaling behavior,
                and reducing unnecessary infrastructure burn while preserving
                enterprise resilience.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                Open Optimization Report
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}