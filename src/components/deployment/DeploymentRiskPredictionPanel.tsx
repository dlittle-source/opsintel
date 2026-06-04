"use client";

import {
  AlertTriangle,
  ShieldAlert,
  TrendingUp,
  Activity,
  BrainCircuit,
  ServerCrash,
  GaugeCircle,
  Radar,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const deploymentRisks = [
  {
    title: "Container Memory Saturation",
    severity: "High Risk",
    probability: 84,
    impact: "Production Instability",
    recommendation:
      "Increase container memory allocation and introduce horizontal scaling thresholds.",
    color:
      "border-red-500/30 bg-red-500/10 text-red-300",
  },
  {
    title: "CI/CD Rollback Probability",
    severity: "Medium Risk",
    probability: 61,
    impact: "Deployment Regression",
    recommendation:
      "Implement staged canary deployments with progressive traffic shifting.",
    color:
      "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  },
  {
    title: "Database Throughput Degradation",
    severity: "Elevated",
    probability: 73,
    impact: "Latency Increase",
    recommendation:
      "Introduce read replicas and optimize query execution performance.",
    color:
      "border-orange-500/30 bg-orange-500/10 text-orange-300",
  },
];

const executiveForecasts = [
  {
    label: "Deployment Stability",
    value: "91%",
    trend: "+4.8%",
  },
  {
    label: "Operational Confidence",
    value: "94%",
    trend: "+6.1%",
  },
  {
    label: "Incident Reduction Forecast",
    value: "38%",
    trend: "+12%",
  },
];

export default function DeploymentRiskPredictionPanel() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_30%)]" />

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <ShieldAlert className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Deployment Risk Prediction Engine
              </h2>

              <p className="mt-1 max-w-2xl text-sm text-slate-400">
                AI-powered deployment forecasting, infrastructure risk
                detection, rollout intelligence, and operational impact
                prediction.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Status */}
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-emerald-200/70">
              Executive Forecast
            </div>

            <div className="text-sm font-medium text-emerald-100">
              Deployment posture stable across projected release windows
            </div>
          </div>
        </div>
      </div>

      {/* Forecast Cards */}
      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {executiveForecasts.map((forecast) => (
          <div
            key={forecast.label}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">
                  {forecast.label}
                </div>

                <div className="mt-3 text-4xl font-semibold text-white">
                  {forecast.value}
                </div>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-300">
                {forecast.trend}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-cyan-300">
              <TrendingUp className="h-4 w-4" />
              AI-generated operational forecast
            </div>
          </div>
        ))}
      </div>

      {/* Risk Intelligence Grid */}
      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        {/* Left Side */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Predictive Deployment Risks
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                AI-generated deployment risk assessments based on infrastructure telemetry patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {deploymentRisks.map((risk) => (
              <div
                key={risk.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-cyan-400/20"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-2">
                        <AlertTriangle className="h-5 w-5 text-red-300" />
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {risk.title}
                        </div>

                        <div className="mt-1 text-sm text-slate-400">
                          Potential Impact: {risk.impact}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                        <span>Predicted Failure Probability</span>

                        <span>{risk.probability}%</span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                          style={{
                            width: `${risk.probability}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        AI Recommendation
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {risk.recommendation}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium ${risk.color}`}
                  >
                    {risk.severity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* AI Deployment Radar */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  AI Deployment Radar
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Live operational deployment intelligence signals.
                </p>
              </div>

              <Radar className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Infrastructure Drift Detection",
                "Canary Rollout Monitoring",
                "AI Operational Stability Tracking",
                "Deployment Blast Radius Analysis",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <span className="text-sm text-slate-300">
                    {item}
                  </span>

                  <div className="flex items-center gap-2 text-emerald-300">
                    <Activity className="h-4 w-4" />
                    <span className="text-xs font-medium">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Advisory */}
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <GaugeCircle className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Advisory Signal
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI strategic deployment guidance
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <div className="flex items-start gap-3">
                <ServerCrash className="mt-1 h-5 w-5 text-orange-300" />

                <div>
                  <div className="text-sm font-medium text-white">
                    Elevated deployment volatility projected within
                    next release cycle.
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    AI models recommend implementing automated
                    rollback verification, deployment segmentation,
                    and infrastructure resiliency reinforcement prior
                    to production rollout approval.
                  </p>
                </div>
              </div>

              <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                Open Executive Risk Report
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}