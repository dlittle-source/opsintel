"use client";

import { useEffect, useState } from "react";

type IncidentStatus = "detecting" | "investigating" | "mitigating" | "resolved";

type Incident = {
  id: number;
  title: string;
  affectedService: string;
  status: IncidentStatus;
  severity: "medium" | "high" | "critical";
  impact: string;
  action: string;
};

const incidents: Incident[] = [
  {
    id: 1,
    title: "API Latency Degradation",
    affectedService: "Backend API",
    status: "detecting",
    severity: "high",
    impact: "User requests are responding slower than expected.",
    action: "Analyze API logs, inspect database queries, and validate recent deployments.",
  },
  {
    id: 2,
    title: "Container Memory Pressure",
    affectedService: "Application Cluster",
    status: "investigating",
    severity: "medium",
    impact: "Containers are approaching configured memory limits.",
    action: "Review memory usage, increase resource limits, or scale replicas.",
  },
  {
    id: 3,
    title: "Authentication Error Spike",
    affectedService: "Auth Service",
    status: "mitigating",
    severity: "critical",
    impact: "Login attempts are intermittently failing.",
    action: "Rollback recent auth changes and inspect upstream dependency health.",
  },
  {
    id: 4,
    title: "Database Query Saturation",
    affectedService: "PostgreSQL Database",
    status: "resolved",
    severity: "high",
    impact: "Database response time temporarily exceeded baseline.",
    action: "Slow query analysis completed and index optimization recommended.",
  },
];

export default function ProductionIncidentSimulator() {
  const [activeIncident, setActiveIncident] = useState<Incident>(incidents[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncident =
        incidents[Math.floor(Math.random() * incidents.length)];

      setActiveIncident(randomIncident);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const severityStyles = {
    medium: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    high: "border-orange-400/20 bg-orange-400/10 text-orange-300",
    critical: "border-red-400/20 bg-red-400/10 text-red-300",
  };

  const statusStyles = {
    detecting: "text-cyan-300",
    investigating: "text-amber-300",
    mitigating: "text-orange-300",
    resolved: "text-emerald-300",
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Production Incident Simulation
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Simulated production incidents with AI-assisted response guidance.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs text-red-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
          Incident Mode
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-wider ${severityStyles[activeIncident.severity]}`}
          >
            {activeIncident.severity} severity
          </span>

          <span
            className={`text-xs uppercase tracking-wider ${statusStyles[activeIncident.status]}`}
          >
            {activeIncident.status}
          </span>
        </div>

        <h3 className="text-base font-semibold text-white">
          {activeIncident.title}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Affected Service:{" "}
          <span className="text-slate-200">
            {activeIncident.affectedService}
          </span>
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Business Impact
            </p>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {activeIncident.impact}
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              AI Recommended Response
            </p>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {activeIncident.action}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}