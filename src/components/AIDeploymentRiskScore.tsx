"use client";

import { useEffect, useState } from "react";

type RiskLevel = "low" | "medium" | "high";

export default function AIDeploymentRiskScore() {
  const [score, setScore] = useState(82);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(Math.floor(68 + Math.random() * 28));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const riskLevel: RiskLevel =
    score >= 88 ? "low" : score >= 76 ? "medium" : "high";

  const riskStyles = {
    low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    medium: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    high: "border-red-400/20 bg-red-400/10 text-red-300",
  };

  const message = {
    low: "Deployment risk is low. Infrastructure signals are stable.",
    medium:
      "Deployment risk is moderate. Review telemetry and recent operational events before release.",
    high:
      "Deployment risk is elevated. Investigate alerts, incidents, and rollback indicators before deployment.",
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            AI Deployment Risk Score
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI-assisted release readiness scoring based on infrastructure behavior.
          </p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wider ${riskStyles[riskLevel]}`}
        >
          {riskLevel} risk
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-[220px_1fr]">
        <div className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="text-5xl font-bold text-white">
            {score}
          </div>

          <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
            Release Confidence
          </p>

          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                riskLevel === "low"
                  ? "bg-emerald-400"
                  : riskLevel === "medium"
                  ? "bg-amber-400"
                  : "bg-red-400"
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            AI Release Assessment
          </p>

          <h3 className="mt-3 text-lg font-semibold text-white">
            {message[riskLevel]}
          </h3>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
              <p className="text-xs text-slate-500">Telemetry</p>
              <p className="mt-1 text-sm text-slate-300">Analyzed</p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
              <p className="text-xs text-slate-500">Incidents</p>
              <p className="mt-1 text-sm text-slate-300">Evaluated</p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
              <p className="text-xs text-slate-500">Rollback Risk</p>
              <p className="mt-1 text-sm text-slate-300">Scored</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}