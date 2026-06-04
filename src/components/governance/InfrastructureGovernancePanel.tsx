"use client";

import { GeneratedArchitecture } from "@/types/architecture";
import {
  runGovernanceAudit,
  GovernanceFinding,
} from "@/lib/governanceEngine";

type Props = {
  architecture: GeneratedArchitecture | null;
};

const severityStyles: Record<string, string> = {
  low: "border-blue-400/30 bg-blue-500/10 text-blue-200",
  medium: "border-yellow-400/30 bg-yellow-500/10 text-yellow-200",
  high: "border-orange-400/30 bg-orange-500/10 text-orange-200",
  critical: "border-red-400/30 bg-red-500/10 text-red-200",
};

const riskBannerStyles: Record<string, string> = {
  low: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
  medium: "border-yellow-400/30 bg-yellow-500/10 text-yellow-200",
  high: "border-orange-400/30 bg-orange-500/10 text-orange-200",
  critical: "border-red-400/30 bg-red-500/10 text-red-200",
};

const categoryLabels: Record<string, string> = {
  "security-controls": "Security Controls",
  "data-protection": "Data Protection",
  resiliency: "Resiliency",
  "operational-excellence": "Operational Excellence",
  "cost-governance": "Cost Governance",
  "production-readiness": "Production Readiness",
};

const severityRank: Record<string, number> = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
};

function ScoreCard({ label, score }: { label: string; score: number }) {
  const normalizedScore = Math.max(0, Math.min(score, 100));

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-3xl font-bold text-white">{score}</span>
        <span className="mb-1 text-sm text-slate-500">/100</span>
      </div>

      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div
          className="h-2 rounded-full bg-cyan-400"
          style={{ width: `${normalizedScore}%` }}
        />
      </div>
    </div>
  );
}

function FindingCard({ finding }: { finding: GovernanceFinding }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-white">{finding.title}</h4>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
            {categoryLabels[finding.category] || finding.category}
          </p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${
            severityStyles[finding.severity]
          }`}
        >
          {finding.severity}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {finding.description}
      </p>

      <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Governance Recommendation
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {finding.recommendation}
        </p>
      </div>
    </div>
  );
}

export default function InfrastructureGovernancePanel({
  architecture,
}: Props) {
  if (!architecture) {
    return null;
  }

  const audit = runGovernanceAudit(architecture);

  const prioritizedFindings = [...audit.findings].sort(
    (a, b) => severityRank[b.severity] - severityRank[a.severity]
  );

  const criticalCount = audit.findings.filter(
    (finding) => finding.severity === "critical"
  ).length;

  const highCount = audit.findings.filter(
    (finding) => finding.severity === "high"
  ).length;

  const certificationStatus =
    audit.productionReadinessScore >= 85
      ? "Production Ready"
      : audit.productionReadinessScore >= 70
      ? "Needs Governance Review"
      : "Not Production Ready";

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            AI Governance Intelligence
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Infrastructure Governance Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Production readiness, security validation, resiliency analysis,
            compliance detection, and topology governance advisories.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-4 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Certification Status
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            {certificationStatus}
          </p>
        </div>
      </div>

      <div
        className={`mt-6 rounded-2xl border p-5 ${
          riskBannerStyles[audit.riskLevel]
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-80">
              Executive Governance Summary
            </p>

            <h3 className="mt-2 text-2xl font-bold capitalize">
              {audit.riskLevel} Infrastructure Risk
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-6 opacity-90">
              AI governance analysis evaluated production readiness,
              operational resilience, infrastructure security posture,
              deployment maturity, and enterprise governance controls across the
              detected topology.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.2em] opacity-70">
              Governance Score
            </p>

            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold">{audit.overallScore}</span>
              <span className="mb-1 text-sm opacity-70">/100</span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <p className="text-xs uppercase tracking-[0.2em] opacity-70">
              Critical Findings
            </p>
            <p className="mt-2 text-2xl font-bold">{criticalCount}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <p className="text-xs uppercase tracking-[0.2em] opacity-70">
              High Findings
            </p>
            <p className="mt-2 text-2xl font-bold">{highCount}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <p className="text-xs uppercase tracking-[0.2em] opacity-70">
              Total Findings
            </p>
            <p className="mt-2 text-2xl font-bold">{audit.findings.length}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <ScoreCard label="Overall" score={audit.overallScore} />
        <ScoreCard
          label="Production"
          score={audit.productionReadinessScore}
        />
        <ScoreCard label="Security" score={audit.securityScore} />
        <ScoreCard label="Resiliency" score={audit.resiliencyScore} />
        <ScoreCard label="Operations" score={audit.operationalScore} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <h3 className="font-semibold text-white">
            Topology Governance Advisories
          </h3>

          <div className="mt-4 space-y-3">
            {audit.advisories.map((advisory, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-sm leading-6 text-slate-300"
              >
                {advisory}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-white">Governance Findings</h3>

            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
              {audit.findings.length} detected
            </span>
          </div>

          <div className="mt-4 space-y-4">
            {prioritizedFindings.length > 0 ? (
              prioritizedFindings.map((finding) => (
                <FindingCard key={finding.id} finding={finding} />
              ))
            ) : (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-sm text-emerald-200">
                No major governance gaps detected. This architecture appears
                structurally healthy for production review.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}