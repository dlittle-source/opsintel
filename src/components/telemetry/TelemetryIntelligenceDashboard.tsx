"use client";

import {
  AlertTriangle,
  Activity,
  Cpu,
  Database,
  ShieldAlert,
  ServerCrash,
  TrendingUp,
  Wifi,
} from "lucide-react";

import { GeneratedArchitecture } from "@/types/architecture";

import {
  generateTelemetryIntelligence,
  TelemetrySignal,
} from "@/lib/telemetryIntelligenceEngine";

type Props = {
  architecture: GeneratedArchitecture;
};

function severityStyles(severity: string) {
  switch (severity) {
    case "critical":
      return "border-red-500/30 bg-red-500/10 text-red-300";
    case "warning":
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
    default:
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }
}

function signalIcon(type: string) {
  switch (type) {
    case "cpu":
      return <Cpu className="h-4 w-4" />;
    case "database":
      return <Database className="h-4 w-4" />;
    case "security":
      return <ShieldAlert className="h-4 w-4" />;
    case "network":
      return <Wifi className="h-4 w-4" />;
    case "availability":
      return <ServerCrash className="h-4 w-4" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
}

function MetricCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string | number;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl">
      <div className="text-sm text-slate-400">{title}</div>

      <div className="mt-3 text-3xl font-bold text-white">{value}</div>

      <div className="mt-2 text-xs text-slate-500">{subtitle}</div>
    </div>
  );
}

function SignalCard({ signal }: { signal: TelemetrySignal }) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-lg ${severityStyles(
        signal.severity
      )}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            {signalIcon(signal.type)}

            <span>{signal.metric}</span>
          </div>

          <div className="mt-2 text-lg font-bold">
            {signal.value}
            {signal.unit}
          </div>

          <div className="mt-1 text-sm opacity-80">
            {signal.serviceName}
          </div>
        </div>

        <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide">
          {signal.severity}
        </div>
      </div>

      <div className="mt-4 text-sm opacity-90">{signal.message}</div>
    </div>
  );
}

export default function TelemetryIntelligenceDashboard({
  architecture,
}: Props) {
  const telemetry = generateTelemetryIntelligence(architecture);

  const warningCount = telemetry.activeSignals.filter(
    (signal) => signal.severity === "warning"
  ).length;

  const criticalCount = telemetry.activeSignals.filter(
    (signal) => signal.severity === "critical"
  ).length;

  return (
    <section className="mt-6 rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-cyan-300">
            <Activity className="h-5 w-5" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em]">
              PHASE 5O
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Real-Time Infrastructure Telemetry Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
            AI-powered enterprise observability engine with predictive outage
            intelligence, telemetry anomaly detection, operational monitoring,
            and real-time infrastructure risk analysis.
          </p>
        </div>

        <div
          className={`rounded-2xl border px-5 py-4 text-sm shadow-xl ${severityStyles(
            telemetry.overallStatus
          )}`}
        >
          <div className="text-xs uppercase tracking-[0.25em] opacity-70">
            Operational Status
          </div>

          <div className="mt-2 text-2xl font-bold capitalize">
            {telemetry.overallStatus}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Infrastructure Health"
          value={`${telemetry.healthScore}%`}
          subtitle="Composite telemetry intelligence score"
        />

        <MetricCard
          title="Active Signals"
          value={telemetry.activeSignals.length}
          subtitle="Live infrastructure telemetry streams"
        />

        <MetricCard
          title="Warning Signals"
          value={warningCount}
          subtitle="Early-stage operational degradation"
        />

        <MetricCard
          title="Critical Signals"
          value={criticalCount}
          subtitle="High-risk infrastructure events"
        />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-cyan-300" />

            <h3 className="text-lg font-semibold text-white">
              Live Telemetry Event Stream
            </h3>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {telemetry.activeSignals.map((signal) => (
              <SignalCard key={signal.id} signal={signal} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-300" />

              <h3 className="text-lg font-semibold text-white">
                Predictive Outage Intelligence
              </h3>
            </div>

            <div
              className={`mt-5 rounded-2xl border p-4 ${severityStyles(
                telemetry.predictiveOutage.riskLevel
              )}`}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-wide opacity-70">
                  Risk Level
                </div>

                <div className="font-semibold capitalize">
                  {telemetry.predictiveOutage.riskLevel}
                </div>
              </div>

              <div className="mt-4 text-lg font-semibold">
                {telemetry.predictiveOutage.prediction}
              </div>

              <div className="mt-4 text-sm opacity-80">
                Confidence: {telemetry.predictiveOutage.confidence}%
              </div>

              <div className="mt-2 text-sm opacity-80">
                Time Window: {telemetry.predictiveOutage.timeWindow}
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold">
                  Recommended Prevention Actions
                </div>

                <ul className="mt-3 space-y-2 text-sm opacity-90">
                  {telemetry.predictiveOutage.preventionSteps.map(
                    (step, index) => (
                      <li
                        key={index}
                        className="rounded-xl border border-white/5 bg-black/20 px-3 py-2"
                      >
                        {step}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2">
              <ServerCrash className="h-5 w-5 text-red-300" />

              <h3 className="text-lg font-semibold text-white">
                AI Incident Correlation
              </h3>
            </div>

            <div className="mt-5 space-y-4">
              {telemetry.correlatedIncidents.length === 0 ? (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  No active correlated incidents detected across infrastructure
                  telemetry streams.
                </div>
              ) : (
                telemetry.correlatedIncidents.map((incident) => (
                  <div
                    key={incident.id}
                    className={`rounded-2xl border p-4 ${severityStyles(
                      incident.severity
                    )}`}
                  >
                    <div className="text-lg font-semibold">
                      {incident.title}
                    </div>

                    <div className="mt-3 text-sm opacity-90">
                      {incident.suspectedCause}
                    </div>

                    <div className="mt-4 text-xs uppercase tracking-wide opacity-70">
                      Affected Services
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {incident.affectedServices.map((service) => (
                        <div
                          key={service}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs"
                        >
                          {service}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-sm">
                      {incident.recommendedAction}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-cyan-300" />

          <h3 className="text-lg font-semibold text-white">
            Operational Event Timeline
          </h3>
        </div>

        <div className="mt-6 space-y-4">
          {telemetry.timeline.length === 0 ? (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
              No elevated operational events detected in the telemetry stream.
            </div>
          ) : (
            telemetry.timeline.map((event) => (
              <div
                key={event.id}
                className={`rounded-2xl border p-4 ${severityStyles(
                  event.severity
                )}`}
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-lg font-semibold">
                      {event.title}
                    </div>

                    <div className="mt-2 text-sm opacity-90">
                      {event.description}
                    </div>
                  </div>

                  <div className="text-xs uppercase tracking-wide opacity-70">
                    Live telemetry event
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-500/10 bg-cyan-500/5 p-6">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Executive Observability Summary
        </div>

        <div className="mt-4 text-lg leading-8 text-slate-200">
          {telemetry.executiveSummary}
        </div>
      </div>
    </section>
  );
}