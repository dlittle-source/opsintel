import { GeneratedArchitecture } from "@/types/architecture";

export type GovernanceSeverity = "low" | "medium" | "high" | "critical";

export type GovernanceCategory =
  | "security-controls"
  | "data-protection"
  | "resiliency"
  | "operational-excellence"
  | "cost-governance"
  | "production-readiness";

export type GovernanceFinding = {
  id: string;
  title: string;
  category: GovernanceCategory;
  severity: GovernanceSeverity;
  description: string;
  recommendation: string;
};

export type GovernanceAuditResult = {
  overallScore: number;
  productionReadinessScore: number;
  securityScore: number;
  resiliencyScore: number;
  operationalScore: number;
  complianceScore: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  findings: GovernanceFinding[];
  advisories: string[];
};

function hasService(architecture: GeneratedArchitecture, keywords: string[]) {
  const text = JSON.stringify(architecture).toLowerCase();

  return keywords.some((keyword) => text.includes(keyword.toLowerCase()));
}

function calculateRiskLevel(score: number): GovernanceAuditResult["riskLevel"] {
  if (score >= 85) return "low";
  if (score >= 70) return "medium";
  if (score >= 50) return "high";

  return "critical";
}

function severityPenalty(severity: GovernanceSeverity) {
  switch (severity) {
    case "critical":
      return 25;
    case "high":
      return 18;
    case "medium":
      return 10;
    case "low":
      return 5;
    default:
      return 0;
  }
}

export function runGovernanceAudit(
  architecture: GeneratedArchitecture
): GovernanceAuditResult {
  const findings: GovernanceFinding[] = [];

  const hasAuth = hasService(architecture, [
    "auth",
    "authentication",
    "identity",
    "cognito",
    "supabase auth",
    "oauth",
    "sso",
  ]);

  const hasDatabase = hasService(architecture, [
    "database",
    "postgres",
    "postgresql",
    "mysql",
    "dynamodb",
    "mongodb",
    "supabase",
    "rds",
  ]);

  const hasMonitoring = hasService(architecture, [
    "monitoring",
    "cloudwatch",
    "prometheus",
    "grafana",
    "datadog",
    "new relic",
    "metrics",
  ]);

  const hasLogging = hasService(architecture, [
    "logging",
    "logs",
    "cloudwatch logs",
    "log analytics",
    "elk",
    "opensearch",
    "splunk",
  ]);

  const hasLoadBalancer = hasService(architecture, [
    "load balancer",
    "alb",
    "elb",
    "application load balancer",
    "nginx",
    "reverse proxy",
    "gateway",
  ]);

  const hasCache = hasService(architecture, [
    "redis",
    "cache",
    "elasticache",
    "cdn",
    "cloudfront",
  ]);

  const hasCICD = hasService(architecture, [
    "ci/cd",
    "cicd",
    "github actions",
    "gitlab ci",
    "pipeline",
    "deployment pipeline",
    "automation",
  ]);

  const hasSecrets = hasService(architecture, [
    "secrets",
    "secret manager",
    "secrets manager",
    "parameter store",
    "vault",
    "environment variables",
  ]);

  const hasNetworkProtection = hasService(architecture, [
    "waf",
    "firewall",
    "security group",
    "private subnet",
    "vpc",
    "network acl",
    "zero trust",
  ]);

  const hasBackup = hasService(architecture, [
    "backup",
    "snapshot",
    "replication",
    "point-in-time recovery",
    "pitr",
    "restore",
  ]);

  const hasContainer = hasService(architecture, [
    "docker",
    "ecs",
    "eks",
    "kubernetes",
    "container",
    "fargate",
  ]);

  const hasResiliency = hasService(architecture, [
    "multi-az",
    "multi az",
    "autoscaling",
    "auto scaling",
    "failover",
    "redundancy",
    "replica",
    "replication",
  ]);

  const hasEncryption = hasService(architecture, [
    "encryption",
    "kms",
    "tls",
    "ssl",
    "https",
    "encrypted",
  ]);

  const hasHealthChecks = hasService(architecture, [
    "health check",
    "healthcheck",
    "/health",
    "readiness",
    "liveness",
  ]);

  if (!hasAuth) {
    findings.push({
      id: "missing-auth",
      title: "Authentication layer not detected",
      category: "security-controls",
      severity: "high",
      description:
        "The architecture does not appear to include a dedicated authentication, identity, or access control layer.",
      recommendation:
        "Add Supabase Auth, AWS Cognito, Auth0, OAuth, SSO, or another identity provider.",
    });
  }

  if (!hasSecrets) {
    findings.push({
      id: "missing-secrets-management",
      title: "Secrets management not detected",
      category: "security-controls",
      severity: "high",
      description:
        "No secrets management system was detected for API keys, tokens, database credentials, or environment secrets.",
      recommendation:
        "Use AWS Secrets Manager, Parameter Store, Vault, encrypted environment variables, or Supabase secrets.",
    });
  }

  if (!hasNetworkProtection) {
    findings.push({
      id: "missing-network-protection",
      title: "Network protection layer not detected",
      category: "security-controls",
      severity: "medium",
      description:
        "No WAF, firewall, security group strategy, private subnet, or network access control layer was detected.",
      recommendation:
        "Add hardened security groups, WAF rules, private networking, VPC segmentation, or network ACLs.",
    });
  }

  if (hasDatabase && !hasBackup) {
    findings.push({
      id: "missing-backups",
      title: "Database backup strategy not detected",
      category: "data-protection",
      severity: "high",
      description:
        "A database is present, but no backup, snapshot, restore, or replication strategy was detected.",
      recommendation:
        "Add automated backups, point-in-time recovery, snapshots, restore testing, or cross-region replication.",
    });
  }

  if (hasDatabase && !hasEncryption) {
    findings.push({
      id: "missing-data-encryption",
      title: "Data encryption controls not detected",
      category: "data-protection",
      severity: "medium",
      description:
        "A data layer is present, but encryption controls were not detected.",
      recommendation:
        "Use TLS in transit, encryption at rest, KMS-managed keys, or provider-level encrypted storage.",
    });
  }

  if (!hasMonitoring) {
    findings.push({
      id: "missing-monitoring",
      title: "Monitoring system not detected",
      category: "operational-excellence",
      severity: "medium",
      description:
        "The architecture does not appear to include a dedicated metrics or monitoring layer.",
      recommendation:
        "Add CloudWatch, Prometheus, Grafana, Datadog, New Relic, or another monitoring system.",
    });
  }

  if (!hasLogging) {
    findings.push({
      id: "missing-logging",
      title: "Centralized logging not detected",
      category: "operational-excellence",
      severity: "medium",
      description:
        "Centralized logs were not detected, which may reduce troubleshooting and audit visibility.",
      recommendation:
        "Add centralized application logs, infrastructure logs, request logs, and deployment logs.",
    });
  }

  if (!hasCICD) {
    findings.push({
      id: "missing-cicd",
      title: "CI/CD pipeline not detected",
      category: "operational-excellence",
      severity: "medium",
      description:
        "No automated deployment pipeline was detected, which may increase manual deployment risk.",
      recommendation:
        "Add GitHub Actions, GitLab CI, CircleCI, or another automated deployment workflow.",
    });
  }

  if (!hasLoadBalancer) {
    findings.push({
      id: "missing-load-balancer",
      title: "Traffic routing layer not detected",
      category: "production-readiness",
      severity: "medium",
      description:
        "No load balancer, reverse proxy, API gateway, or traffic distribution layer was detected.",
      recommendation:
        "Add an Application Load Balancer, Nginx reverse proxy, API Gateway, or managed ingress layer.",
    });
  }

  if (!hasHealthChecks) {
    findings.push({
      id: "missing-health-checks",
      title: "Health check strategy not detected",
      category: "production-readiness",
      severity: "medium",
      description:
        "No application health check, readiness check, or liveness endpoint was detected.",
      recommendation:
        "Add /health endpoints, container health checks, readiness probes, and deployment validation checks.",
    });
  }

  if (hasContainer && !hasMonitoring) {
    findings.push({
      id: "container-observability-gap",
      title: "Container observability gap",
      category: "operational-excellence",
      severity: "medium",
      description:
        "Containers are detected, but monitoring was not found.",
      recommendation:
        "Add container metrics, restart visibility, log aggregation, and runtime health checks.",
    });
  }

  if (hasDatabase && !hasCache) {
    findings.push({
      id: "missing-cache-layer",
      title: "Cache or edge optimization layer not detected",
      category: "cost-governance",
      severity: "low",
      description:
        "A database exists, but no cache, CDN, or edge optimization layer was detected.",
      recommendation:
        "Consider Redis, ElastiCache, CloudFront, CDN caching, or application-level caching.",
    });
  }

  if (!hasResiliency) {
    findings.push({
      id: "limited-resiliency-patterns",
      title: "Resiliency pattern not detected",
      category: "resiliency",
      severity: "medium",
      description:
        "No obvious multi-AZ, autoscaling, failover, redundancy, or replica strategy was detected.",
      recommendation:
        "Add redundancy, autoscaling, failover planning, multi-AZ deployment, or replica infrastructure.",
    });
  }

  const penalty = findings.reduce(
    (total, finding) => total + severityPenalty(finding.severity),
    0
  );

  const overallScore = Math.max(0, 100 - penalty);

  const securityFindings = findings.filter(
    (finding) => finding.category === "security-controls"
  );

  const resiliencyFindings = findings.filter(
    (finding) =>
      finding.category === "resiliency" ||
      finding.category === "data-protection"
  );

  const operationalFindings = findings.filter(
    (finding) => finding.category === "operational-excellence"
  );

  const complianceFindings = findings.filter(
    (finding) =>
      finding.category === "security-controls" ||
      finding.category === "data-protection" ||
      finding.category === "production-readiness"
  );

  const productionFindings = findings.filter(
    (finding) => finding.category === "production-readiness"
  );

  const securityScore = Math.max(
    0,
    100 -
      securityFindings.reduce(
        (total, finding) => total + severityPenalty(finding.severity),
        0
      )
  );

  const resiliencyScore = Math.max(
    0,
    100 -
      resiliencyFindings.reduce(
        (total, finding) => total + severityPenalty(finding.severity),
        0
      )
  );

  const operationalScore = Math.max(
    0,
    100 -
      operationalFindings.reduce(
        (total, finding) => total + severityPenalty(finding.severity),
        0
      )
  );

  const complianceScore = Math.max(
    0,
    100 -
      complianceFindings.reduce(
        (total, finding) => Math.round(total + severityPenalty(finding.severity) * 0.75),
        0
      )
  );

  const productionReadinessScore = Math.max(
    0,
    Math.round(
      (overallScore +
        securityScore +
        resiliencyScore +
        operationalScore +
        complianceScore -
        productionFindings.length * 5) /
        5
    )
  );

  const advisories = [
    overallScore >= 85
      ? "Architecture is trending toward production-ready governance standards."
      : "Architecture requires additional governance controls before production deployment.",

    securityScore < 80
      ? "Security controls should be prioritized before scaling the system."
      : "Security control posture appears structurally healthy.",

    resiliencyScore < 80
      ? "Resiliency and data protection improvements are recommended to reduce outage and data-loss risk."
      : "Resiliency and data protection posture appears stable.",

    operationalScore < 80
      ? "Operational excellence should be improved with monitoring, logging, health checks, and deployment automation."
      : "Operational foundation appears strong.",

    complianceScore < 80
      ? "Compliance readiness needs stronger evidence around security controls, data protection, and production safeguards."
      : "Compliance readiness appears aligned with enterprise review expectations.",
  ];

  return {
    overallScore,
    productionReadinessScore,
    securityScore,
    resiliencyScore,
    operationalScore,
    complianceScore,
    riskLevel: calculateRiskLevel(overallScore),
    findings,
    advisories,
  };
}