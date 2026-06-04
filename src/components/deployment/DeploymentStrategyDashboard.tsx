"use client";

import {
  DeploymentStrategyAnalysis,
  DeploymentServiceInsight,
} from "@/lib/deploymentStrategyEngine";

type Props = {
  analysis: DeploymentStrategyAnalysis;
};

function RiskBadge({ risk }: { risk: "low" | "medium" | "high" }) {
  const styles = {
    low: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    medium: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    high: "bg-red-500/10 text-red-300 border-red-500/20",
  };

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${styles[risk]}`}>
      {risk.toUpperCase()} RISK
    </span>
  );
}

function ServiceCard({ service }: { service: DeploymentServiceInsight }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{service.label}</h3>
          <p className="mt-1 text-sm capitalize text-slate-400">{service.type}</p>
        </div>

        <RiskBadge risk={service.deploymentRisk} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Strategy
          </p>
          <p className="mt-2 text-xl font-bold capitalize text-cyan-300">
            {service.deploymentStrategy}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Rollback Ready
          </p>
          <p className="mt-2 text-2xl font-bold text-white">
            {service.rollbackReadiness}%
          </p>
        </div>
      </div>

      <div className="mt-5">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            service.zeroDowntimeCapable
              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
              : "border-red-500/20 bg-red-500/10 text-red-300"
          }`}
        >
          {service.zeroDowntimeCapable
            ? "ZERO-DOWNTIME CAPABLE"
            : "ZERO-DOWNTIME RISK"}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-300">
          Deployment Recommendations
        </p>

        <ul className="mt-3 space-y-2">
          {service.recommendations.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-slate-800 bg-slate-950/30 px-3 py-2 text-sm text-slate-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function DeploymentStrategyDashboard({ analysis }: Props) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Deployment Strategy Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Enterprise deployment governance, rollback maturity, CI/CD reliability,
            zero-downtime readiness, and production release strategy analysis.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">
          <p className="text-xs uppercase tracking-wide text-cyan-300">
            Overall Deployment Risk
          </p>

          <p className="mt-1 text-3xl font-bold capitalize text-white">
            {analysis.overallDeploymentRisk}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Deployment Maturity
          </p>
          <p className="mt-3 text-4xl font-bold text-cyan-300">
            {analysis.deploymentMaturityScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Rollback Preparedness
          </p>
          <p className="mt-3 text-4xl font-bold text-emerald-300">
            {analysis.rollbackPreparednessScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Zero-Downtime Readiness
          </p>
          <p className="mt-3 text-4xl font-bold text-purple-300">
            {analysis.zeroDowntimeReadiness}%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            CI/CD Reliability
          </p>
          <p className="mt-3 text-4xl font-bold text-orange-300">
            {analysis.ciCdReliabilityScore}%
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold text-white">
          Service Deployment Analysis
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Per-service deployment strategy, rollback readiness, and release risk review.
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {analysis.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h3 className="text-lg font-semibold text-white">
            Deployment Recommendations
          </h3>

          <ul className="mt-5 space-y-3">
            {analysis.deploymentRecommendations.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h3 className="text-lg font-semibold text-white">
            Executive Deployment Summary
          </h3>

          <ul className="mt-5 space-y-3">
            {analysis.executiveSummary.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}