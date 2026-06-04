import { GeneratedArchitecture } from "@/types/architecture";

export type ThreatSeverity = "low" | "medium" | "high" | "critical";

export type ThreatCategory =
  | "identity"
  | "network"
  | "application"
  | "database"
  | "cloud"
  | "deployment"
  | "ddos"
  | "misconfiguration";

export type ThreatSignal = {
  id: string;
  title: string;
  category: ThreatCategory;
  severity: ThreatSeverity;
  affectedService: string;
  provider?: string;
  description: string;
  evidence: string[];
  recommendedAction: string;
};

export type ThreatPosture = {
  score: number;
  riskLevel: ThreatSeverity;
  summary: string;
};

export type ThreatIntelligenceResult = {
  posture: ThreatPosture;
  activeThreats: ThreatSignal[];
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

function getNodeLabel(node: ArchitectureNodeLike, index: number): string {
  return node.label || node.data?.label || `Service ${index + 1}`;
}

function getNodeProvider(node: ArchitectureNodeLike): string | undefined {
  return node.provider || node.data?.provider;
}

function getNodeType(node: ArchitectureNodeLike): string | undefined {
  return node.type || node.data?.type;
}

function getThreatSeverity(index: number): ThreatSeverity {
  const severities: ThreatSeverity[] = ["low", "medium", "high", "critical"];
  return severities[index % severities.length];
}

function getThreatCategory(serviceType?: string, index = 0): ThreatCategory {
  if (serviceType === "database") return "database";
  if (serviceType === "security") return "identity";
  if (serviceType === "backend") return "application";
  if (serviceType === "frontend") return "network";
  if (serviceType === "cicd") return "deployment";

  const categories: ThreatCategory[] = [
    "cloud",
    "network",
    "misconfiguration",
    "ddos",
  ];

  return categories[index % categories.length];
}

function getThreatTitle(category: ThreatCategory): string {
  switch (category) {
    case "identity":
      return "Suspicious identity activity detected";
    case "network":
      return "Network exposure risk detected";
    case "application":
      return "Application boundary risk detected";
    case "database":
      return "Database access risk detected";
    case "deployment":
      return "Deployment pipeline security risk detected";
    case "ddos":
      return "DDoS traffic pattern indicator detected";
    case "misconfiguration":
      return "Cloud misconfiguration risk detected";
    default:
      return "Cloud security posture warning";
  }
}

function getEvidence(category: ThreatCategory): string[] {
  switch (category) {
    case "identity":
      return [
        "Elevated privilege boundary detected",
        "Authentication surface requires review",
        "Least-privilege posture may be incomplete",
      ];
    case "network":
      return [
        "Public-facing service detected",
        "Ingress exposure requires validation",
        "Network policy should be reviewed",
      ];
    case "application":
      return [
        "API boundary exposed to user traffic",
        "Input validation and rate limiting should be confirmed",
        "Service-to-service trust path requires review",
      ];
    case "database":
      return [
        "Stateful dependency detected",
        "Access control and backup posture should be validated",
        "Connection path may require tighter segmentation",
      ];
    case "deployment":
      return [
        "Deployment automation path detected",
        "Secrets handling should be validated",
        "Rollback and approval gates should be reviewed",
      ];
    case "ddos":
      return [
        "Traffic-sensitive service path detected",
        "Rate limiting posture should be confirmed",
        "Edge protection strategy should be reviewed",
      ];
    case "misconfiguration":
      return [
        "Cloud resource configuration requires review",
        "Default security posture may be insufficient",
        "Monitoring and alerting coverage should be validated",
      ];
    default:
      return [
        "Cloud service detected",
        "Security posture requires periodic review",
        "Operational monitoring should remain active",
      ];
  }
}

function getRecommendedAction(category: ThreatCategory): string {
  switch (category) {
    case "identity":
      return "Review IAM permissions, enforce least privilege, validate MFA coverage, and audit privileged access paths.";
    case "network":
      return "Review ingress rules, restrict public exposure, validate security groups, and confirm network segmentation.";
    case "application":
      return "Validate authentication, rate limiting, input validation, API authorization, and service boundary protections.";
    case "database":
      return "Restrict database access, validate encryption, review backups, inspect connection paths, and confirm least privilege.";
    case "deployment":
      return "Review CI/CD secrets, approval gates, branch protections, deployment tokens, and rollback controls.";
    case "ddos":
      return "Confirm edge protection, rate limiting, CDN/WAF posture, autoscaling limits, and traffic anomaly alerts.";
    case "misconfiguration":
      return "Audit cloud configuration, review logging coverage, inspect security baselines, and remediate risky defaults.";
    default:
      return "Review cloud security posture and validate monitoring, access control, and network exposure.";
  }
}

function scoreThreats(threats: ThreatSignal[]): number {
  const penalty = threats.reduce((total, threat) => {
    if (threat.severity === "critical") return total + 22;
    if (threat.severity === "high") return total + 15;
    if (threat.severity === "medium") return total + 8;
    return total + 3;
  }, 0);

  return Math.max(0, Math.min(100, 100 - penalty));
}

function riskFromScore(score: number): ThreatSeverity {
  if (score < 45) return "critical";
  if (score < 65) return "high";
  if (score < 82) return "medium";
  return "low";
}

export function generateThreatIntelligence(
  architecture: GeneratedArchitecture
): ThreatIntelligenceResult {
  const nodes = (architecture.nodes || []) as ArchitectureNodeLike[];

  const activeThreats: ThreatSignal[] = nodes.slice(0, 8).map((node, index) => {
    const serviceName = getNodeLabel(node, index);
    const provider = getNodeProvider(node);
    const serviceType = getNodeType(node);
    const category = getThreatCategory(serviceType, index);
    const severity = getThreatSeverity(index);

    return {
      id: `threat-${index + 1}`,
      title: getThreatTitle(category),
      category,
      severity,
      affectedService: serviceName,
      provider,
      description:
        "AI threat intelligence identified a potential security posture concern based on service role, cloud exposure, dependency sensitivity, and operational risk.",
      evidence: getEvidence(category),
      recommendedAction: getRecommendedAction(category),
    };
  });

  const score = scoreThreats(activeThreats);
  const riskLevel = riskFromScore(score);

  return {
    posture: {
      score,
      riskLevel,
      summary:
        riskLevel === "critical"
          ? "Critical security posture risk detected. Immediate review is recommended."
          : riskLevel === "high"
            ? "High security posture risk detected across one or more services."
            : riskLevel === "medium"
              ? "Moderate security risk detected. Review recommended controls."
              : "Security posture is currently healthy with low detected risk.",
    },
    activeThreats,
    executiveSummary:
      riskLevel === "critical"
        ? "AI threat intelligence detected critical risk across the architecture. Security review should be prioritized before production deployment."
        : riskLevel === "high"
          ? "AI threat intelligence detected elevated security risk across key services. Recommended controls should be reviewed."
          : riskLevel === "medium"
            ? "AI threat intelligence detected moderate security exposure. The architecture should be reviewed for access, network, and deployment controls."
            : "AI threat intelligence shows low current security risk with no critical threats detected.",
  };
}