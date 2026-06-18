import { Activity } from "lucide-react";

import { getRuntimeTelemetrySnapshot } from "@/lib/runtimeTelemetryEngine";

export default function RuntimeTelemetrySection() {
  const telemetry = getRuntimeTelemetrySnapshot();

  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <Activity className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">
          Runtime Telemetry
        </h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Telemetry Status"
          value={telemetry.telemetryStatus}
        />

        <MetricCard
          label="Active Signals"
          value={String(telemetry.activeSignals)}
        />

        <MetricCard
          label="Data Freshness"
          value={telemetry.dataFreshness}
        />
      </div>

      <div className="mt-6 space-y-3">
        {telemetry.signals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">
                {signal.label}
              </div>

              <div className="text-sm text-muted-foreground">
                {signal.status}
              </div>
            </div>

            <div className="mt-2 text-2xl font-bold">
              {signal.value}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {signal.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard({
  label,
  value,
}: MetricCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-muted-foreground">
        {label}
      </div>

      <div className="mt-2 text-xl font-bold">
        {value}
      </div>
    </div>
  );
}