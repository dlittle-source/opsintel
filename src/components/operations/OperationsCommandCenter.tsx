"use client";

import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Database,
  GitBranch,
  Radio,
  ShieldAlert,
  TrendingUp,
  Wifi,
  Zap,
} from "lucide-react";

import { GeneratedArchitecture } from "@/types/architecture";

import {
  generateLiveOperationsCommandCenter,
  LiveOperationEvent,
  OperationSeverity,
} from "@/lib/liveOperationsEngine";

type Props = {
  architecture: GeneratedArchitecture;
};

function severityStyles(severity: OperationSeverity) {
  switch (severity) {
    case "critical":
      return "border-red-500/30 bg-red-500/10 text-red-300";
    case "warning":
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
    case "info":
      return "border-cyan-500/30 bg-cyan-500/10 text-cyan-300";
    default:
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }
}

function eventIcon(type: string) {
  switch (type) {
    case "deployment":
      return <GitBranch className="h-4 w-4" />;
    case "autoscaling":
      return <TrendingUp className="h-4 w-4" />;
    case "database":
      return <Database className="h-4 w-4" />;
    case "security":
      return <ShieldAlert className="h-4 w-4" />;
    case "network":
      return <Wifi className="h-4 w-4" />;
    case "recovery":
      return <CheckCircle2 className="h-4 w-4" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
}

function OperationEventCard({ event }: { event: LiveOperationEvent }) {
  return (
    <div className={`rounded-2xl border p-4 ${severityStyles(event.severity)}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            {eventIcon(event.type)}
            <span>{event.title}</span>
          </div>

          <div className="mt-2 text-xs uppercase tracking-wide opacity-70">
            {event.serviceName}
          </div>
        </div>

        <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase">
          {event.timestampLabel}
        </div>
      </div>

      <p className="mt-4 text-sm opacity-90">{event.message}</p>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs opacity-90">
        {event.recommendation}
      </div>
    </div>
  );
}

export default function OperationsCommandCenter({ architecture }: Props) {
  const operations = generateLiveOperationsCommandCenter(architecture);

  return (
    <section className="mt-6 rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-black via-slate-950 to-slate-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2 text-cyan-300">
            <Radio className="h-5 w-5" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em]">
              PHASE 5P
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Live Operations Command Center
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
            Enterprise-grade cloud operations center with live event streams,
            active incident intelligence, deployment awareness, security
            signals, recovery tracking, and AI-guided mitigation workflows.
          </p>
        </div>

        <div
          className={`rounded-2xl border px-5 py-4 shadow-xl ${severityStyles(
            operations.commandStatus
          )}`}
        >
          <div className="text-xs uppercase tracking-[0.25em] opacity-70">
            Command Status
          </div>

          <div className="mt-2 text-2xl font-bold capitalize">
            {operations.commandStatus}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">Operational Score</div>
          <div className="mt-3 text-3xl font-bold text-white">
            {operations.operationalScore}%
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Live command center confidence
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">Live Events</div>
          <div className="mt-3 text-3xl font-bold text-white">
            {operations.liveEvents.length}
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Active operational stream items
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">Active Incidents</div>
          <div className="mt-3 text-3xl font-bold text-white">
            {operations.activeIncidents.length}
          </div>
          <div className="mt-2 text-xs text-slate-500">
            AI-correlated incident groups
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">Response Mode</div>
          <div className="mt-3 text-3xl font-bold text-white">
            {operations.commandStatus === "critical"
              ? "IR"
              : operations.commandStatus === "warning"
                ? "Watch"
                : "Normal"}
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Operational readiness posture
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-cyan-300" />

            <h3 className="text-lg font-semibold text-white">
              Live Operations Event Stream
            </h3>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {operations.liveEvents.map((event) => (
              <OperationEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-300" />

              <h3 className="text-lg font-semibold text-white">
                Active Incident Control
              </h3>
            </div>

            <div className="mt-5 space-y-4">
              {operations.activeIncidents.length === 0 ? (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  No active incidents detected. Command center remains in normal
                  monitoring mode.
                </div>
              ) : (
                operations.activeIncidents.map((incident) => (
                  <div
                    key={incident.id}
                    className={`rounded-2xl border p-4 ${severityStyles(
                      incident.severity
                    )}`}
                  >
                    <div className="text-lg font-semibold">
                      {incident.title}
                    </div>

                    <div className="mt-2 text-xs uppercase tracking-wide opacity-70">
                      Status: {incident.status}
                    </div>

                    <p className="mt-4 text-sm opacity-90">
                      {incident.suspectedRootCause}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {incident.affectedServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs">
                      {incident.recommendedAction}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/10 bg-cyan-500/5 p-5">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Executive Operations Briefing
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {operations.executiveBriefing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}