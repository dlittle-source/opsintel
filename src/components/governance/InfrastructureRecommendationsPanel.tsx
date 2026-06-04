"use client";

import { GeneratedArchitecture } from "@/types/architecture";
import { runGovernanceAudit } from "@/lib/governanceEngine";
import {
  generateGovernanceRecommendations,
  GovernanceRecommendation,
} from "@/lib/governanceRecommendations";

type Props = {
  architecture: GeneratedArchitecture | null;
};

const priorityStyles: Record<string, string> = {
  low: "border-blue-400/30 bg-blue-500/10 text-blue-200",
  medium: "border-yellow-400/30 bg-yellow-500/10 text-yellow-200",
  high: "border-orange-400/30 bg-orange-500/10 text-orange-200",
  critical: "border-red-400/30 bg-red-500/10 text-red-200",
};

const effortStyles: Record<string, string> = {
  low: "text-emerald-300",
  medium: "text-yellow-300",
  high: "text-orange-300",
};

function RecommendationCard({
  recommendation,
}: {
  recommendation: GovernanceRecommendation;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-white">
            {recommendation.title}
          </h4>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
            {recommendation.category.replaceAll("-", " ")}
          </p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${
            priorityStyles[recommendation.priority]
          }`}
        >
          {recommendation.priority}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        {recommendation.impact}
      </p>

      <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Recommended Action
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {recommendation.recommendation}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
        <span>Implementation Effort</span>

        <span className={`font-semibold ${effortStyles[recommendation.effort]}`}>
          {recommendation.effort}
        </span>
      </div>
    </div>
  );
}

export default function InfrastructureRecommendationsPanel({
  architecture,
}: Props) {
  if (!architecture) {
    return null;
  }

  const audit = runGovernanceAudit(architecture);
  const recommendations = generateGovernanceRecommendations(audit);

  const topPriority = recommendations[0]?.priority ?? "low";

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            AI Advisory Engine
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Intelligent Governance Recommendations
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Prioritized remediation guidance for production readiness,
            security modernization, resiliency upgrades, and operational
            hardening.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-4 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Top Priority
          </p>

          <p className="mt-2 text-xl font-bold capitalize text-white">
            {topPriority}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Recommendations
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {recommendations.length}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Generated from governance findings and production-readiness scoring.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Advisory Mode
          </p>

          <p className="mt-3 text-2xl font-bold text-white">
            Remediation Plan
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Converts infrastructure risks into actionable engineering tasks.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Deployment Impact
          </p>

          <p className="mt-3 text-2xl font-bold text-white">
            Production Hardening
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Helps teams improve deployment confidence before release.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {recommendations.length > 0 ? (
          recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))
        ) : (
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-sm text-emerald-200">
            No remediation actions required. This architecture appears aligned
            with current governance expectations.
          </div>
        )}
      </div>
    </section>
  );
}