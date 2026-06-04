"use client";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  GitBranch,
  Layers3,
  Network,
  Radar,
  ServerCrash,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const correlatedIncidents = [
  {
    title: "API Gateway Latency Cascade",
    severity: "Critical",
    confidence: "96%",
    affected: [
      "Frontend Load Balancer",
      "Authentication Service",
      "Container Cluster",
    ],
    summary:
      "AI correlation models identified cascading latency propagation originating from upstream gateway saturation.",
  },
  {
    title: "Database Replication Drift",
    severity: "Elevated",
    confidence: "88%",
    affected: [
      "Primary Database",
      "Analytics Pipeline",
      "Monitoring Layer",
    ],
    summary:
      "Cross-service telemetry patterns indicate replication inconsistency impacting downstream analytics systems.",
  },
];

const operationalSignals = [
  {
    label: "Incident Correlation Accuracy",
    value: "97%",
  },
  {
    label: "Predicted Blast Radius",
    value: "6 Services",
  },
  {
    label: "Autonomous Recovery Confidence",
    value: "91%",
  },
];

export default function AutonomousIncidentCorrelationEngine() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      {/* Ambient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <BrainCircuit className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Autonomous Incident Correlation Engine
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              AI-powered incident correlation, cascading failure analysis,
              infrastructure dependency intelligence, and autonomous operational
              diagnostics.
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              AI Correlation Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              Autonomous incident analysis operating within optimal thresholds
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {operationalSignals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">
                  {signal.label}
                </div>

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
              AI operational intelligence
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        {/* Incident Correlations */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Correlated Incident Chains
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                AI-detected operational dependency failures and cascading infrastructure patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <GitBranch className="h-5 w-5 text-cyan-300" />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {correlatedIncidents.map((incident) => (
              <div
                key={incident.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-cyan-400/20"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3">
                        <ServerCrash className="h-5 w-5 text-red-300" />
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {incident.title}
                        </div>

                        <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                          AI Correlation Confidence
                          <ArrowRight className="h-4 w-4" />
                          {incident.confidence}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-300">
                      {incident.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {incident.affected.map((service) => (
                        <div
                          key={service}
                          className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-300"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                    {incident.severity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Intelligence Column */}
        <div className="space-y-6">
          {/* Dependency Mapping */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Dependency Intelligence
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Live operational topology awareness.
                </p>
              </div>

              <Network className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: Layers3,
                  label: "Cross-Service Dependency Mapping",
                },
                {
                  icon: Cpu,
                  label: "Container Failure Correlation",
                },
                {
                  icon: Activity,
                  label: "Telemetry Signal Fusion",
                },
                {
                  icon: ShieldAlert,
                  label: "Infrastructure Risk Escalation",
                },
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

                  <div className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />

                    <span className="text-xs font-medium">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive AI Narrative */}
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3">
                <AlertTriangle className="h-5 w-5 text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Incident Narrative
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated operational storyline
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                AI operational models detected abnormal latency escalation
                patterns propagating across authentication infrastructure and
                container orchestration layers. Current telemetry suggests
                elevated deployment contention risk with potential downstream
                impact across customer-facing API services if mitigation
                thresholds are not introduced before the next release cycle.
              </p>

              <div className="mt-5 flex items-center gap-2 text-cyan-300">
                <Sparkles className="h-4 w-4" />

                <span className="text-xs uppercase tracking-[0.18em]">
                  Autonomous operational intelligence active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}