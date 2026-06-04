import { GeneratedArchitecture } from "@/types/architecture";

export type TelemetrySeverity = "normal" | "warning" | "critical";

export type TelemetryEventType =
  | "latency"
  | "cpu"
  | "memory"
  | "network"
  | "database"
  | "deployment"
  | "security"
  | "availability";

export type TelemetrySignal = {
  id: string;
  serviceName: string;
  provider?: string;
  type: TelemetryEventType;
  metric: string;
  value: number;
  unit: string;
  threshold: number;
  severity: TelemetrySeverity;
  message: string;
  timestamp: string;
};

export type IncidentCorrelation = {
  id: string;
  title: string;
  severity: TelemetrySeverity;
  affectedServices: string[];
  suspectedCause: string;
  businessImpact: string;
  recommendedAction: string;
};

export type PredictiveOutageInsight = {
  riskLevel: TelemetrySeverity;
  prediction: string;
  confidence: number;
  timeWindow: string;
  preventionSteps: string[];
};

export type TelemetryTimelineEvent = {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  severity: TelemetrySeverity;
};

export type TelemetryIntelligenceResult = {
  healthScore: number;
  overallStatus: TelemetrySeverity;
  activeSignals: TelemetrySignal[];
  correlatedIncidents: IncidentCorrelation[];
  predictiveOutage: PredictiveOutageInsight;
  timeline: TelemetryTimelineEvent[];
  executiveSummary: string;
};

type ArchitectureNodeLike = {
  id?: string;
  label?: string;
  provider?: string;
  type?: string;
  data?: {
    label?: string;
    provider?: string;
    type?: string;
  };
};

function getSeverity(value: number, threshold: number): TelemetrySeverity {
  if (value >= threshold * 1.25) return "critical";
  if (value >= threshold) return "warning";
  return "normal";
}

function scoreFromSignals(signals: TelemetrySignal[]): number {
  const penalty = signals.reduce((total, signal) => {
    if (signal.severity === "critical") return total + 18;
    if (signal.severity === "warning") return total + 8;
    return total + 1;
  }, 0);

  return Math.max(0, Math.min(100, 100 - penalty));
}

function getOverallStatus(score: number): TelemetrySeverity {
  if (score < 60) return "critical";
  if (score < 82) return "warning";
  return "normal";
}

function getNodeLabel(node: ArchitectureNodeLike, index: number): string {
  return node.label || node.data?.label || `Service ${index + 1}`;
}

function getNodeProvider(node: ArchitectureNodeLike): string | undefined {
  return node.provider || node.data?.provider;
}

function getNodeId(node: ArchitectureNodeLike, index: number): string {
  return node.id || `node-${index + 1}`;
}

export function generateTelemetryIntelligence(
  architecture: GeneratedArchitecture
): TelemetryIntelligenceResult {
  const nodes = (architecture.nodes || []) as ArchitectureNodeLike[];
  const timestamp = new Date().toISOString();

  const activeSignals: TelemetrySignal[] = nodes
    .slice(0, 8)
    .flatMap((node, index) => {
      const nodeId = getNodeId(node, index);
      const serviceName = getNodeLabel(node, index);
      const provider = getNodeProvider(node);

      const latency = 80 + index * 37;
      const cpu = 42 + index * 9;
      const memory = 48 + index * 7;

      return [
        {
          id: `${nodeId}-latency`,
          serviceName,
          provider,
          type: "latency",
          metric: "Response Latency",
          value: latency,
          unit: "ms",
          threshold: 220,
          severity: getSeverity(latency, 220),
          message:
            latency >= 220
              ? `${serviceName} latency is trending above safe operating limits.`
              : `${serviceName} latency is operating within normal range.`,
          timestamp,
        },
        {
          id: `${nodeId}-cpu`,
          serviceName,
          provider,
          type: "cpu",
          metric: "CPU Utilization",
          value: cpu,
          unit: "%",
          threshold: 75,
          severity: getSeverity(cpu, 75),
          message:
            cpu >= 75
              ? `${serviceName} CPU pressure is elevated and may impact throughput.`
              : `${serviceName} CPU utilization is stable.`,
          timestamp,
        },
        {
          id: `${nodeId}-memory`,
          serviceName,
          provider,
          type: "memory",
          metric: "Memory Utilization",
          value: memory,
          unit: "%",
          threshold: 80,
          severity: getSeverity(memory, 80),
          message:
            memory >= 80
              ? `${serviceName} memory usage is approaching saturation.`
              : `${serviceName} memory usage is healthy.`,
          timestamp,
        },
      ];
    });

  const warningSignals = activeSignals.filter(
    (signal) => signal.severity === "warning"
  );

  const criticalSignals = activeSignals.filter(
    (signal) => signal.severity === "critical"
  );

  const affectedServices = Array.from(
    new Set(
      [...criticalSignals, ...warningSignals].map(
        (signal) => signal.serviceName
      )
    )
  );

  const correlatedIncidents: IncidentCorrelation[] =
    affectedServices.length > 0
      ? [
          {
            id: "incident-correlation-001",
            title: "Performance degradation pattern detected",
            severity: criticalSignals.length > 0 ? "critical" : "warning",
            affectedServices,
            suspectedCause:
              criticalSignals.length > 0
                ? "Multiple infrastructure signals are breaching critical thresholds, suggesting resource saturation or dependency strain."
                : "Telemetry trends indicate early-stage degradation across one or more services.",
            businessImpact:
              criticalSignals.length > 0
                ? "User-facing reliability, API response times, and deployment confidence may be impacted."
                : "Minor operational risk detected. The platform remains stable but should be monitored.",
            recommendedAction:
              criticalSignals.length > 0
                ? "Scale impacted services, inspect recent deployments, review logs, and validate upstream dependencies."
                : "Continue monitoring, review capacity trends, and prepare rollback or scaling actions if signals worsen.",
          },
        ]
      : [];

  const healthScore = scoreFromSignals(activeSignals);
  const overallStatus = getOverallStatus(healthScore);

  const predictiveOutage: PredictiveOutageInsight = {
    riskLevel: overallStatus,
    prediction:
      overallStatus === "critical"
        ? "Potential outage risk detected if resource pressure continues without intervention."
        : overallStatus === "warning"
          ? "Service degradation may occur if current telemetry trends continue."
          : "No immediate outage pattern detected.",
    confidence:
      overallStatus === "critical" ? 91 : overallStatus === "warning" ? 78 : 64,
    timeWindow:
      overallStatus === "critical"
        ? "15–30 minutes"
        : overallStatus === "warning"
          ? "1–3 hours"
          : "24 hours",
    preventionSteps:
      overallStatus === "critical"
        ? [
            "Scale high-pressure services immediately.",
            "Inspect recent deployment changes.",
            "Check database and network dependency health.",
            "Prepare rollback plan if error rates increase.",
          ]
        : overallStatus === "warning"
          ? [
              "Monitor latency and CPU trends.",
              "Review autoscaling configuration.",
              "Validate logging and alerting coverage.",
            ]
          : [
              "Continue normal monitoring.",
              "Maintain alert thresholds.",
              "Review telemetry trends during next operational check.",
            ],
  };

  const timeline: TelemetryTimelineEvent[] = activeSignals
    .filter((signal) => signal.severity !== "normal")
    .slice(0, 8)
    .map((signal, index) => ({
      id: `timeline-${index + 1}`,
      timestamp: signal.timestamp,
      title: `${signal.metric} alert on ${signal.serviceName}`,
      description: signal.message,
      severity: signal.severity,
    }));

  return {
    healthScore,
    overallStatus,
    activeSignals,
    correlatedIncidents,
    predictiveOutage,
    timeline,
    executiveSummary:
      overallStatus === "critical"
        ? "Real-time telemetry indicates critical infrastructure risk. Immediate operational response is recommended."
        : overallStatus === "warning"
          ? "Telemetry intelligence detected early degradation signals. The environment is operational but requires monitoring."
          : "Telemetry intelligence shows stable infrastructure health with no active outage pattern detected.",
  };
}