"use client";

import { useEffect, useState } from "react";

type AlertSeverity = "info" | "warning" | "critical";

type Alert = {
  id: number;
  severity: AlertSeverity;
  service: string;
  message: string;
  recommendation: string;
  timestamp: string;
};

const alertPool: Omit<Alert, "id" | "timestamp">[] = [
  {
    severity: "critical",
    service: "API Gateway",
    message: "Error rate exceeded production threshold.",
    recommendation: "Review recent deployments and inspect backend logs.",
  },
  {
    severity: "warning",
    service: "Database",
    message: "Query latency is trending above normal baseline.",
    recommendation: "Analyze slow queries and validate index usage.",
  },
  {
    severity: "info",
    service: "Frontend",
    message: "Deployment health checks completed successfully.",
    recommendation: "No action required.",
  },
  {
    severity: "warning",
    service: "Container Cluster",
    message: "Memory utilization approaching scaling threshold.",
    recommendation: "Consider increasing replica count or resource limits.",
  },
  {
    severity: "critical",
    service: "Authentication Service",
    message: "Elevated latency detected across login requests.",
    recommendation: "Inspect auth service metrics and downstream dependencies.",
  },
];

export default function InfrastructureAlertCenter() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const generateAlert = () => {
      const randomAlert =
        alertPool[Math.floor(Math.random() * alertPool.length)];

      const newAlert: Alert = {
        ...randomAlert,
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
      };

      setAlerts((prev) => [newAlert, ...prev.slice(0, 5)]);
    };

    generateAlert();

    const interval = setInterval(generateAlert, 7000);

    return () => clearInterval(interval);
  }, []);

  const severityStyles = {
    info: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    warning: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    critical: "border-red-400/20 bg-red-400/10 text-red-300",
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Infrastructure Alert Center
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Active infrastructure alerts, operational risks, and remediation guidance.
          </p>
        </div>

        <div className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs text-red-300">
          Active Monitoring
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:border-slate-700"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-wider ${severityStyles[alert.severity]}`}
                >
                  {alert.severity}
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {alert.service}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {alert.message}
                  </p>
                </div>
              </div>

              <span className="text-xs text-slate-500">
                {alert.timestamp}
              </span>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Recommended Action
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {alert.recommendation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}