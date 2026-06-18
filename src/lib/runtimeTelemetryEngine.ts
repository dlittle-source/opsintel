export type RuntimeTelemetrySignal = {
  label: string;
  value: string;
  status: "Stable" | "Elevated" | "Degraded";
  description: string;
};

export type RuntimeTelemetrySnapshot = {
  telemetryStatus: "Operational" | "Watch" | "Degraded";
  activeSignals: number;
  dataFreshness: string;
  signals: RuntimeTelemetrySignal[];
};

export function getRuntimeTelemetrySnapshot(): RuntimeTelemetrySnapshot {
  const signals: RuntimeTelemetrySignal[] = [
    {
      label: "Tenant Runtime Events",
      value: "1,248",
      status: "Stable",
      description: "Runtime events are flowing normally across tenant environments.",
    },
    {
      label: "Policy Evaluations",
      value: "312",
      status: "Stable",
      description: "Runtime policy checks are completing without enforcement delays.",
    },
    {
      label: "Feature Flag Resolutions",
      value: "684",
      status: "Stable",
      description: "Feature access decisions are resolving successfully.",
    },
    {
      label: "Runtime Provisioning Signals",
      value: "97",
      status: "Elevated",
      description: "Provisioning activity is elevated but within acceptable limits.",
    },
  ];

  return {
    telemetryStatus: "Operational",
    activeSignals: signals.length,
    dataFreshness: "Live runtime intelligence",
    signals,
  };
}