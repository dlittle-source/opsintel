"use client";

import {
  AlertTriangle,
  CloudCog,
  Database,
  Fingerprint,
  GitBranch,
  Lock,
  Network,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { GeneratedArchitecture } from "@/types/architecture";

import {
  generateThreatIntelligence,
  ThreatCategory,
  ThreatSeverity,
  ThreatSignal,
} from "@/lib/threatIntelligenceEngine";

type Props = {
  architecture: GeneratedArchitecture;
};

function severityStyles(severity: ThreatSeverity) {
  switch (severity) {
    case "critical":
      return "border-red-500/40 bg-red-500/15 text-red-300";
    case "high":
      return "border-orange-500/40 bg-orange-500/15 text-orange-300";
    case "medium":
      return "border-yellow-500/40 bg-yellow-500/15 text-yellow-300";
    default:
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }
}

function categoryIcon(category: ThreatCategory) {
  switch (category) {
    case "identity":
      return <Fingerprint className="h-4 w-4" />;
    case "network":
      return <Network className="h-4 w-4" />;
    case "application":
      return <Lock className="h-4 w-4" />;
    case "database":
      return <Database className="h-4 w-4" />;
    case "deployment":
      return <GitBranch className="h-4 w-4" />;
    case "ddos":
      return <Zap className="h-4 w-4" />;
    case "misconfiguration":
      return <CloudCog className="h-4 w-4" />;
    default:
      return <ShieldAlert className="h-4 w-4" />;
  }
}

function ThreatCard({ threat }: { threat: ThreatSignal }) {
  return (
    <div className={`rounded-2xl border p-4 ${severityStyles(threat.severity)}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            {categoryIcon(threat.category)}
            <span>{threat.title}</span>
          </div>

          <div className="mt-2 text-xs uppercase tracking-wide opacity-70">
            {threat.affectedService}
          </div>
        </div>

        <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase">
          {threat.severity}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 opacity-90">
        {threat.description}
      </p>

      <div className="mt-4 space-y-2">
        {threat.evidence.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs leading-5">
        {threat.recommendedAction}
      </div>
    </div>
  );
}

export default function ThreatIntelligenceDashboard({
  architecture,
}: Props) {
  const threatIntel = generateThreatIntelligence(architecture);

  const criticalCount = threatIntel.activeThreats.filter(
    (threat) => threat.severity === "critical"
  ).length;

  const highCount = threatIntel.activeThreats.filter(
    (threat) => threat.severity === "high"
  ).length;

  return (
    <section className="mt-6 rounded-3xl border border-red-500/10 bg-gradient-to-br from-slate-950 via-black to-slate-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2 text-red-300">
            <Radar className="h-5 w-5" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em]">
              PHASE 5P
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white">
            AI Threat Intelligence Dashboard
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
            Security operations intelligence layer for identifying suspicious
            access patterns, exposed services, cloud misconfigurations, identity
            risks, deployment pipeline weaknesses, and infrastructure attack
            surface concerns.
          </p>
        </div>

        <div
          className={`rounded-2xl border px-5 py-4 shadow-xl ${severityStyles(
            threatIntel.posture.riskLevel
          )}`}
        >
          <div className="text-xs uppercase tracking-[0.25em] opacity-70">
            Threat Posture
          </div>

          <div className="mt-2 text-2xl font-bold capitalize">
            {threatIntel.posture.riskLevel}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">Security Score</div>
          <div className="mt-3 text-3xl font-bold text-white">
            {threatIntel.posture.score}%
          </div>
          <div className="mt-2 text-xs text-slate-500">
            AI security posture score
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">Active Threats</div>
          <div className="mt-3 text-3xl font-bold text-white">
            {threatIntel.activeThreats.length}
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Simulated threat intelligence signals
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">High Risk</div>
          <div className="mt-3 text-3xl font-bold text-white">{highCount}</div>
          <div className="mt-2 text-xs text-slate-500">
            High severity security findings
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="text-sm text-slate-400">Critical Risk</div>
          <div className="mt-3 text-3xl font-bold text-white">
            {criticalCount}
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Critical security posture risks
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-red-300" />

            <h3 className="text-lg font-semibold text-white">
              Active Threat Intelligence Stream
            </h3>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {threatIntel.activeThreats.map((threat) => (
              <ThreatCard key={threat.id} threat={threat} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-300" />

              <h3 className="text-lg font-semibold text-white">
                Security Posture Brief
              </h3>
            </div>

            <div
              className={`mt-5 rounded-2xl border p-5 ${severityStyles(
                threatIntel.posture.riskLevel
              )}`}
            >
              <div className="text-sm uppercase tracking-wide opacity-70">
                Current Risk Level
              </div>

              <div className="mt-3 text-2xl font-bold capitalize">
                {threatIntel.posture.riskLevel}
              </div>

              <p className="mt-4 text-sm leading-7 opacity-90">
                {threatIntel.posture.summary}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-500/10 bg-emerald-500/5 p-5">
            <div className="flex items-center gap-2 text-emerald-300">
              <ShieldCheck className="h-5 w-5" />

              <div className="text-sm uppercase tracking-[0.3em]">
                Recommended Security Controls
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                Enforce least privilege across all cloud and service access.
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                Validate public exposure, ingress paths, and security groups.
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                Confirm CI/CD secrets handling, approval gates, and branch
                protections.
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                Enable centralized logging, alerting, and incident response
                workflows.
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-red-500/10 bg-red-500/5 p-5">
            <div className="text-sm uppercase tracking-[0.3em] text-red-300">
              Executive Threat Summary
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {threatIntel.executiveSummary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}