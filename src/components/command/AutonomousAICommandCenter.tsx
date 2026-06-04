"use client";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Gauge,
  GitBranch,
  LockKeyhole,
  Network,
  Radar,
  Rocket,
  ShieldAlert,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";

const commandMetrics = [
  { label: "Autonomous Decisions Routed", value: "247", status: "Active" },
  { label: "AI Remediation Confidence", value: "93%", status: "Strong" },
  { label: "Executive Control Readiness", value: "96%", status: "Ready" },
];

const commandActions = [
  {
    title: "Approve Canary Rollout Guardrail",
    category: "Deployment Control",
    priority: "High",
    description:
      "AI recommends enabling progressive traffic shifting before the next production release window.",
  },
  {
    title: "Trigger Compute Rightsizing Review",
    category: "Optimization",
    priority: "Medium",
    description:
      "Autonomous cost models detected over-provisioned workloads with measurable savings opportunity.",
  },
  {
    title: "Escalate Runtime Policy Enforcement",
    category: "Security Governance",
    priority: "Elevated",
    description:
      "AI recommends stronger runtime controls before production promotion to improve compliance posture.",
  },
];

const controlDomains = [
  { icon: Rocket, label: "Deployment Orchestration" },
  { icon: Network, label: "Infrastructure Decision Routing" },
  { icon: Cpu, label: "Compute Optimization Control" },
  { icon: ShieldAlert, label: "Security Policy Escalation" },
  { icon: GitBranch, label: "Incident Correlation Routing" },
];

export default function AutonomousAICommandCenter() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_100px_rgba(56,189,248,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_35%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-4 shadow-[0_0_40px_rgba(56,189,248,0.18)]">
            <TerminalSquare className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              Autonomous AI Control Layer
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Autonomous AI Command Center
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              Executive AI command orchestration, autonomous remediation
              routing, infrastructure decision intelligence, deployment control,
              and enterprise operational action management.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Command Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              AI command routing active across executive operations
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {commandMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">{metric.label}</div>

                <div className="mt-4 text-4xl font-semibold text-white">
                  {metric.value}
                </div>
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                <Radar className="h-5 w-5 text-cyan-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-cyan-300">
              <Activity className="h-4 w-4" />
              {metric.status}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                AI Recommended Command Actions
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Autonomous operational actions prepared for executive approval.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {commandActions.map((action) => (
              <div
                key={action.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-cyan-400/25"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                        <Zap className="h-5 w-5 text-cyan-300" />
                      </div>

                      <div>
                        <div className="text-lg font-medium text-white">
                          {action.title}
                        </div>

                        <div className="mt-1 text-sm text-slate-400">
                          {action.category}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-300">
                      {action.description}
                    </p>

                    <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                      Review Command
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 text-sm font-medium text-purple-300">
                    {action.priority}
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
                  Command Control Domains
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  AI orchestration coverage areas.
                </p>
              </div>

              <Gauge className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-4">
              {controlDomains.map((item) => (
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
                    <span className="text-xs font-medium">Online</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3">
                <LockKeyhole className="h-5 w-5 text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Command Narrative
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated operational control advisory
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                Autonomous command intelligence has identified three executive
                action paths across deployment governance, infrastructure
                optimization, and runtime security controls. Current AI
                recommendation priority favors controlled rollout protection,
                followed by cost optimization review and policy enforcement
                hardening.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                Open AI Command Console
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}