import { GeneratedArchitecture } from "@/types/architecture";

export type OperationSeverity = "stable" | "info" | "warning" | "critical";

export type OperationEventType =
  | "deployment"
  | "autoscaling"
  | "incident"
  | "latency"
  | "database"
  | "security"
  | "network"
  | "recovery";

export type LiveOperationEvent = {
  id: string;
  title: string;
  serviceName: string;
  provider?: string;
  type: OperationEventType;
  severity: OperationSeverity;
  message: string;
  recommendation: string;
  timestampLabel: string;
};

export type ActiveIncident = {
  id: string;
  title: string;
  severity: OperationSeverity;
  affectedServices: string[];
  status: "investigating" | "mitigating" | "monitoring" | "resolved";
  suspectedRootCause: string;
  recommendedAction: string;
};

export type OperationsCommandCenterResult = {
  operationalScore: number;
  commandStatus: OperationSeverity;
  liveEvents: LiveOperationEvent[];
  activeIncidents: ActiveIncident[];
  executiveBriefing: string;
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

function getNodeLabel(node: ArchitectureNodeLike, index: number): string {
  return node.label || node.data?.label || `Service ${index + 1}`;
}

function getNodeProvider(node: ArchitectureNodeLike): string | undefined {
  return node.provider || node.data?.provider;
}

function getEventTemplate(index: number): {
  type: OperationEventType;
  severity: OperationSeverity;
  title: string;
  message: string;
  recommendation: string;
} {
  const templates = [
    {
      type: "deployment" as const,
      severity: "info" as const,
      title: "Deployment event detected",
      message: "A deployment pipeline event was observed for this service.",
      recommendation: "Validate post-deployment health checks and error rates.",
    },
    {
      type: "autoscaling" as const,
      severity: "stable" as const,
      title: "Autoscaling activity normal",
      message: "Autoscaling capacity is responding within expected limits.",
      recommendation: "Continue monitoring capacity and utilization trends.",
    },
    {
      type: "latency" as const,
      severity: "warning" as const,
      title: "Latency pressure increasing",
      message: "Response latency is trending above baseline for this service.",
      recommendation: "Review upstream dependencies and recent traffic spikes.",
    },
    {
      type: "database" as const,
      severity: "warning" as const,
      title: "Database pressure detected",
      message: "Database dependency latency may be affecting request throughput.",
      recommendation: "Inspect query performance, connection pools, and indexes.",
    },
    {
      type: "security" as const,
      severity: "critical" as const,
      title: "Security anomaly detected",
      message: "Suspicious access behavior was detected near this service boundary.",
      recommendation: "Review authentication logs and enforce least privilege controls.",
    },
    {
      type: "network" as const,
      severity: "warning" as const,
      title: "Network degradation signal",
      message: "Network response variability is elevated across this service path.",
      recommendation: "Check load balancer health, DNS routing, and cloud region status.",
    },
    {
      type: "recovery" as const,
      severity: "stable" as const,
      title: "Recovery pattern detected",
      message: "Service telemetry indicates recovery after elevated pressure.",
      recommendation: "Continue monitoring until metrics remain stable.",
    },
  ];

  return templates[index % templates.length];
}

function calculateOperationalScore(events: LiveOperationEvent[]): number {
  const penalty = events.reduce((total, event) => {
    if (event.severity === "critical") return total + 20;
    if (event.severity === "warning") return total + 10;
    if (event.severity === "info") return total + 3;
    return total + 1;
  }, 0);

  return Math.max(0, Math.min(100, 100 - penalty));
}

function getCommandStatus(score: number): OperationSeverity {
  if (score < 55) return "critical";
  if (score < 78) return "warning";
  if (score < 90) return "info";
  return "stable";
}

export function generateLiveOperationsCommandCenter(
  architecture: GeneratedArchitecture
): OperationsCommandCenterResult {
  const nodes = (architecture.nodes || []) as ArchitectureNodeLike[];

  const liveEvents: LiveOperationEvent[] = nodes.slice(0, 10).map((node, index) => {
    const template = getEventTemplate(index);
    const serviceName = getNodeLabel(node, index);
    const provider = getNodeProvider(node);

    return {
      id: `operation-event-${index + 1}`,
      title: template.title,
      serviceName,
      provider,
      type: template.type,
      severity: template.severity,
      message: template.message,
      recommendation: template.recommendation,
      timestampLabel: `T-${(index + 1) * 3} min`,
    };
  });

  const warningAndCriticalEvents = liveEvents.filter(
    (event) => event.severity === "warning" || event.severity === "critical"
  );

  const activeIncidents: ActiveIncident[] =
    warningAndCriticalEvents.length > 0
      ? [
          {
            id: "active-incident-001",
            title: "Cross-service operational degradation detected",
            severity: warningAndCriticalEvents.some(
              (event) => event.severity === "critical"
            )
              ? "critical"
              : "warning",
            affectedServices: warningAndCriticalEvents.map(
              (event) => event.serviceName
            ),
            status: warningAndCriticalEvents.some(
              (event) => event.severity === "critical"
            )
              ? "investigating"
              : "monitoring",
            suspectedRootCause:
              "Correlated live operations events indicate service pressure across deployment, dependency, or network boundaries.",
            recommendedAction:
              "Review live telemetry, validate recent deployment changes, inspect service logs, and prepare scaling or rollback actions if degradation continues.",
          },
        ]
      : [];

  const operationalScore = calculateOperationalScore(liveEvents);
  const commandStatus = getCommandStatus(operationalScore);

  return {
    operationalScore,
    commandStatus,
    liveEvents,
    activeIncidents,
    executiveBriefing:
      commandStatus === "critical"
        ? "The live operations command center is detecting critical production risk. Immediate incident response is recommended."
        : commandStatus === "warning"
          ? "The command center is detecting elevated operational pressure. Engineering teams should monitor and prepare mitigation actions."
          : commandStatus === "info"
            ? "The environment is operational with minor informational events being tracked."
            : "The environment is stable. No major operational risks detected.",
  };
}