"use client";

import {
  Activity,
  AlertCircle,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  GitCommit,
  GitPullRequest,
  Layers3,
  Radar,
  Rocket,
  ServerCrash,
  ShieldCheck,
  Sparkles,
  TimerReset,
  TrendingUp,
} from "lucide-react";

const timelineEvents = [
  {
    time: "09:12 AM",
    title: "Production Deployment Initiated",
    category: "Deployment",
    severity: "Normal",
    description:
      "AI detected a new production release entering rollout phase with stable pre-deployment validation signals.",
    icon: Rocket,
    accent: "cyan",
  },
  {
    time: "09:18 AM",
    title: "Container Scaling Pattern Detected",
    category: "Infrastructure",
    severity: "Watch",
    description:
      "Autoscaling activity increased across compute nodes. AI models project stable traffic absorption with minor utilization pressure.",
    icon: Layers3,
    accent: "blue",
  },
  {
    time: "09:27 AM",
    title: "Latency Spike Correlated",
    category: "Incident Intelligence",
    severity: "Elevated",
    description:
      "Telemetry correlation identified API latency growth connected to authentication service dependency pressure.",
    icon: ServerCrash,
    accent: "orange",
  },
  {
    time: "09:36 AM",
    title: "Security Policy Validation Passed",
    category: "Governance",
    severity: "Resolved",
    description:
      "Runtime security checks and deployment approval controls passed policy validation across production workload paths.",
    icon: ShieldCheck,
    accent: "emerald",
  },
];

const timelineMetrics = [
  {
    label: "Operational Events Analyzed",
    value: "1,284",
  },
  {
    label: "Mean Detection Window",
    value: "42s",
  },
  {
    label: "AI Timeline Confidence",
    value: "96%",
  },
];

function getAccentClasses(accent: string) {
  const styles: Record<string, string> = {
    cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    blue: "border-blue-400/20 bg-blue-400/10 text-blue-300",
    orange: "border-orange-400/20 bg-orange-400/10 text-orange-300",
    emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  };

  return styles[accent] || styles.cyan;
}

export default function AIExecutiveOperationsTimeline() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_30%)]" />

      <div className="relative z-10 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <Clock3 className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              AI Executive Operations Timeline
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
              AI-generated operational chronology, deployment event streaming,
              infrastructure change sequencing, incident-to-resolution tracking,
              and executive timeline intelligence.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Timeline Status
            </div>

            <div className="text-sm font-medium text-emerald-100">
              AI event sequencing active across deployment and incident signals
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {timelineMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
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
              <Sparkles className="h-4 w-4" />
              AI operational timeline intelligence
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Operational Event Stream
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                AI-organized event chronology across deployment, infrastructure,
                security, and incident domains.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>
          </div>

          <div className="relative mt-8 space-y-5">
            <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-400/50 via-blue-400/20 to-transparent" />

            {timelineEvents.map((event) => {
              const Icon = event.icon;

              return (
                <div key={event.title} className="relative flex gap-5">
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${getAccentClasses(
                      event.accent
                    )}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-300 hover:border-cyan-400/20">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-lg font-medium text-white">
                            {event.title}
                          </span>

                          <span
                            className={`rounded-xl border px-3 py-1 text-xs font-medium ${getAccentClasses(
                              event.accent
                            )}`}
                          >
                            {event.severity}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                          <span>{event.category}</span>
                          <ArrowRight className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                        AI Sequenced
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Timeline Intelligence Domains
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Active chronology sources.
                </p>
              </div>

              <Activity className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                { icon: GitCommit, label: "Infrastructure Change Events" },
                { icon: GitPullRequest, label: "Deployment Approval History" },
                { icon: AlertCircle, label: "Incident Escalation Path" },
                { icon: TimerReset, label: "Recovery Time Sequencing" },
                { icon: TrendingUp, label: "Operational Pattern Analysis" },
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
                    <span className="text-xs font-medium">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-3">
                <BrainCircuit className="h-5 w-5 text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Executive Timeline Narrative
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  AI-generated operational storyline
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                AI timeline analysis shows a stable deployment sequence with one
                elevated latency correlation event during rollout. Security and
                governance validations completed successfully, while
                infrastructure scaling remained within acceptable tolerance. The
                current release window is suitable for continued monitoring with
                automated recovery thresholds enabled.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">
                Open Operations Timeline
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}