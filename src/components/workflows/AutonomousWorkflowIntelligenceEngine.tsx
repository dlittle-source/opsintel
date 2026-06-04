"use client";

import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  GitBranch,
  Layers3,
  PlayCircle,
  Radar,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const workflowMetrics = [
  {
    label: "Autonomous Workflows Active",
    value: "184",
    trend: "Operational",
  },
  {
    label: "Automation Success Rate",
    value: "97%",
    trend: "Stable",
  },
  {
    label: "AI Workflow Confidence",
    value: "94%",
    trend: "High",
  },
];

const workflowPipelines = [
  {
    title: "Incident Remediation Pipeline",
    status: "Autonomous",
    description:
      "AI-driven remediation workflows automatically correlate telemetry anomalies and initiate recovery orchestration paths.",
  },
  {
    title: "Deployment Approval Workflow",
    status: "AI Assisted",
    description:
      "Operational risk scoring and governance validation are evaluated before production deployment authorization.",
  },
  {
    title: "Infrastructure Optimization Cycle",
    status: "Continuous",
    description:
      "Optimization models continuously monitor compute utilization, scaling efficiency, and cloud resource allocation.",
  },
];

const workflowSignals = [
  {
    icon: GitBranch,
    label: "AI deployment orchestration",
  },
  {
    icon: RefreshCcw,
    label: "Autonomous remediation sequencing",
  },
  {
    icon: ShieldCheck,
    label: "Governance approval automation",
  },
  {
    icon: Layers3,
    label: "Cross-system workflow intelligence",
  },
];

export default function AutonomousWorkflowIntelligenceEngine() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_100px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_35%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <Workflow className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              Autonomous Workflow Intelligence
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Autonomous Workflow Intelligence Engine
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              AI workflow orchestration, automated operational sequencing,
              remediation pipeline intelligence, governance automation, and
              enterprise process optimization.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Workflow Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              AI operational workflows executing within healthy thresholds
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {workflowMetrics.map((metric) => (
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
                <Activity className="h-5 w-5 text-cyan-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-cyan-300">
              <Zap className="h-4 w-4" />
              {metric.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        {/* Workflow Pipelines */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                AI Workflow Pipelines
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Autonomous operational workflow sequencing and enterprise automation intelligence.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {workflowPipelines.map((pipeline) => (
              <div
                key={pipeline.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-cyan-400/20"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                        <PlayCircle className="h-5 w-5 text-cyan-300" />
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {pipeline.title}
                        </div>

                        <div className="mt-1 text-sm text-slate-400">
                          Workflow orchestration active
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-300">
                      {pipeline.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 text-sm font-medium text-purple-300">
                    {pipeline.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Workflow Signals */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Workflow Intelligence Signals
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Active automation systems.
                </p>
              </div>

              <Radar className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-4">
              {workflowSignals.map((signal) => (
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
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Narrative */}
          <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3">
                <Bot className="h-5 w-5 text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Workflow Narrative
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated automation advisory
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                AI workflow orchestration models indicate strong operational
                automation maturity across deployment sequencing, incident
                remediation, governance validation, and infrastructure
                optimization pipelines. Current workflow intelligence posture
                supports scalable enterprise operations with reduced manual
                intervention requirements.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                Open Workflow Analysis
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}