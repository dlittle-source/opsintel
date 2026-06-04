import {
  GovernanceAuditResult,
  GovernanceFinding,
} from "@/lib/governanceEngine";

export type GovernanceRecommendationPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type GovernanceRecommendation = {
  id: string;
  title: string;
  priority: GovernanceRecommendationPriority;
  category: string;
  impact: string;
  effort: "low" | "medium" | "high";
  recommendation: string;
};

function priorityFromSeverity(
  severity: GovernanceFinding["severity"]
): GovernanceRecommendationPriority {
  switch (severity) {
    case "critical":
      return "critical";

    case "high":
      return "high";

    case "medium":
      return "medium";

    case "low":
      return "low";

    default:
      return "medium";
  }
}

function effortLevel(category: string): "low" | "medium" | "high" {
  switch (category) {
    case "security-controls":
      return "medium";

    case "data-protection":
      return "high";

    case "resiliency":
      return "high";

    case "operational-excellence":
      return "medium";

    case "production-readiness":
      return "medium";

    case "cost-governance":
      return "low";

    default:
      return "medium";
  }
}

function impactDescription(category: string) {
  switch (category) {
    case "security-controls":
      return "Improves infrastructure security posture and governance compliance.";

    case "data-protection":
      return "Reduces risk of data loss and improves disaster recovery readiness.";

    case "resiliency":
      return "Improves uptime, redundancy, and fault tolerance.";

    case "operational-excellence":
      return "Improves deployment visibility, monitoring, and operational stability.";

    case "production-readiness":
      return "Improves enterprise deployment maturity and production confidence.";

    case "cost-governance":
      return "Improves infrastructure efficiency and cost optimization.";

    default:
      return "Improves overall operational posture.";
  }
}

export function generateGovernanceRecommendations(
  audit: GovernanceAuditResult
): GovernanceRecommendation[] {
  const recommendations: GovernanceRecommendation[] = [];

  audit.findings.forEach((finding) => {
    recommendations.push({
      id: finding.id,
      title: finding.title,
      priority: priorityFromSeverity(finding.severity),
      category: finding.category,
      effort: effortLevel(finding.category),
      impact: impactDescription(finding.category),
      recommendation: finding.recommendation,
    });
  });

  if (audit.productionReadinessScore < 70) {
    recommendations.push({
      id: "production-hardening",
      title: "Production Deployment Hardening",
      priority: "high",
      category: "production-readiness",
      effort: "medium",
      impact:
        "Improves deployment safety, operational reliability, and enterprise readiness.",
      recommendation:
        "Introduce deployment validation, automated rollback strategies, health verification, and deployment governance workflows.",
    });
  }

  if (audit.securityScore < 75) {
    recommendations.push({
      id: "security-modernization",
      title: "Security Governance Modernization",
      priority: "high",
      category: "security-controls",
      effort: "medium",
      impact:
        "Improves compliance readiness and infrastructure security maturity.",
      recommendation:
        "Implement centralized secrets management, hardened network segmentation, authentication enforcement, and infrastructure access governance.",
    });
  }

  if (audit.resiliencyScore < 75) {
    recommendations.push({
      id: "resiliency-upgrade",
      title: "Infrastructure Resiliency Upgrade",
      priority: "high",
      category: "resiliency",
      effort: "high",
      impact:
        "Improves uptime resilience and reduces outage exposure.",
      recommendation:
        "Add redundancy, autoscaling, multi-zone failover, replication, and disaster recovery planning.",
    });
  }

  return recommendations.sort((a, b) => {
    const rank = {
      critical: 4,
      high: 3,
      medium: 2,
      low: 1,
    };

    return rank[b.priority] - rank[a.priority];
  });
}