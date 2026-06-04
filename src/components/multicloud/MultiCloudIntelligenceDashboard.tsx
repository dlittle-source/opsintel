"use client";

import {
  MultiCloudAnalysis,
  MultiCloudServiceInsight,
} from "@/lib/multiCloudIntelligence";

type Props = {
  analysis: MultiCloudAnalysis;
};

function RiskBadge({
  risk,
}: {
  risk: "low" | "medium" | "high";
}) {
  const styles = {
    low: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    medium: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    high: "bg-red-500/10 text-red-300 border-red-500/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${styles[risk]}`}
    >
      {risk.toUpperCase()}
    </span>
  );
}

function ProviderBadge({
  provider,
}: {
  provider: string;
}) {
  const styles: Record<string, string> = {
    aws: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    azure: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    gcp: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    "multi-cloud":
      "bg-purple-500/10 text-purple-300 border-purple-500/20",
    unknown: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${
        styles[provider] || styles.unknown
      }`}
    >
      {provider}
    </span>
  );
}

function ServiceCard({
  service,
}: {
  service: MultiCloudServiceInsight;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {service.label}
          </h3>

          <p className="mt-1 text-sm capitalize text-slate-400">
            {service.type}
          </p>
        </div>

        <ProviderBadge provider={service.detectedProvider} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Provider Confidence
          </p>

          <p className="mt-2 text-2xl font-bold text-cyan-300">
            {service.providerConfidence}%
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Resiliency Impact
          </p>

          <div className="mt-3">
            <RiskBadge risk={service.resiliencyImpact} />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <RiskBadge risk={service.lockInRisk} />

        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
          Vendor Lock-In
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-300">
          Recommendations
        </p>

        <ul className="mt-3 space-y-2">
          {service.recommendations.map((recommendation) => (
            <li
              key={recommendation}
              className="rounded-lg border border-slate-800 bg-slate-950/30 px-3 py-2 text-sm text-slate-400"
            >
              {recommendation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MultiCloudIntelligenceDashboard({
  analysis,
}: Props) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Multi-Cloud Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            AI-powered cloud provider analysis, failover intelligence,
            vendor lock-in assessment, and enterprise resiliency governance.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-5 py-3">
          <p className="text-xs uppercase tracking-wide text-purple-300">
            Primary Provider
          </p>

          <p className="mt-1 text-3xl font-bold capitalize text-white">
            {analysis.primaryProvider}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Multi-Cloud Score
          </p>

          <p className="mt-3 text-4xl font-bold text-cyan-300">
            {analysis.multiCloudScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Vendor Portability
          </p>

          <p className="mt-3 text-4xl font-bold text-orange-300">
            {analysis.vendorLockInScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Failover Readiness
          </p>

          <p className="mt-3 text-4xl font-bold text-emerald-300">
            {analysis.failoverReadinessScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Disaster Recovery
          </p>

          <p className="mt-3 text-4xl font-bold text-pink-300">
            {analysis.disasterRecoveryScore}%
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Cloud Service Intelligence
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Provider detection, resiliency analysis, and cloud portability
            recommendations.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {analysis.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h3 className="text-lg font-semibold text-white">
            Provider Recommendations
          </h3>

          <ul className="mt-5 space-y-3">
            {analysis.providerRecommendations.map((recommendation) => (
              <li
                key={recommendation}
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
              >
                {recommendation}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h3 className="text-lg font-semibold text-white">
            Executive Multi-Cloud Summary
          </h3>

          <ul className="mt-5 space-y-3">
            {analysis.executiveSummary.map((summary) => (
              <li
                key={summary}
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
              >
                {summary}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}