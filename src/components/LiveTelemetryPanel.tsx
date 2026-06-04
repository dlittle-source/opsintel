"use client";

import { useEffect, useState } from "react";

type TelemetryMetric = {
  label: string;
  value: number;
  unit: string;
  status: "healthy" | "warning" | "critical";
};

function getStatus(value: number, warning: number, critical: number) {
  if (value >= critical) return "critical";
  if (value >= warning) return "warning";
  return "healthy";
}

export default function LiveTelemetryPanel() {
  const [metrics, setMetrics] = useState<TelemetryMetric[]>([]);

  useEffect(() => {
    const generateMetrics = () => {
      const cpu = Math.floor(20 + Math.random() * 75);
      const memory = Math.floor(35 + Math.random() * 60);
      const latency = Math.floor(40 + Math.random() * 320);
      const errorRate = Number((Math.random() * 4.5).toFixed(2));

      setMetrics([
        {
          label: "CPU Usage",
          value: cpu,
          unit: "%",
          status: getStatus(cpu, 70, 90),
        },
        {
          label: "Memory Usage",
          value: memory,
          unit: "%",
          status: getStatus(memory, 75, 90),
        },
        {
          label: "API Latency",
          value: latency,
          unit: "ms",
          status: getStatus(latency, 180, 280),
        },
        {
          label: "Error Rate",
          value: errorRate,
          unit: "%",
          status:
            errorRate >= 3
              ? "critical"
              : errorRate >= 1.5
              ? "warning"
              : "healthy",
        },
      ]);
    };

    generateMetrics();
    const interval = setInterval(generateMetrics, 3500);

    return () => clearInterval(interval);
  }, []);

  const statusStyles = {
    healthy: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    warning: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
    critical: "border-red-400/30 bg-red-400/10 text-red-300",
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Live Infrastructure Telemetry
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Simulated real-time operational metrics across generated cloud infrastructure.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live Simulation
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-slate-400">{metric.label}</p>

              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${
                  statusStyles[metric.status]
                }`}
              >
                {metric.status}
              </span>
            </div>

            <div className="text-2xl font-bold text-white">
              {metric.value}
              <span className="ml-1 text-sm text-slate-400">{metric.unit}</span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  metric.status === "critical"
                    ? "bg-red-400"
                    : metric.status === "warning"
                    ? "bg-yellow-400"
                    : "bg-emerald-400"
                }`}
                style={{
                  width:
                    metric.unit === "ms"
                      ? `${Math.min(metric.value / 3.2, 100)}%`
                      : `${Math.min(metric.value, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}