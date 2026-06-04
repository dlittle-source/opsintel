import { GeneratedArchitecture } from "@/types/architecture";

export type SnapshotDiffResult = {
  addedServices: string[];
  removedServices: string[];
  addedConnections: number;
  removedConnections: number;
  nodeDelta: number;
  connectionDelta: number;
  productionReadinessDelta: number;
  riskLevel: "low" | "medium" | "high";
  summary: string[];
  aiInsights: string[];
  driftWarnings: string[];
};

function serviceIncludes(services: string[], keyword: string) {
  return services.some((service) =>
    service.toLowerCase().includes(keyword.toLowerCase())
  );
}

export function compareArchitectures(
  current: GeneratedArchitecture,
  previous: GeneratedArchitecture
): SnapshotDiffResult {
  const currentNodes = current.nodes || [];
  const previousNodes = previous.nodes || [];

  const currentConnections = current.connections || [];
  const previousConnections = previous.connections || [];

  const currentLabels = new Set(currentNodes.map((node) => node.label));

  const previousLabels = new Set(previousNodes.map((node) => node.label));

  const addedServices = currentNodes
    .filter((node) => !previousLabels.has(node.label))
    .map((node) => node.label);

  const removedServices = previousNodes
    .filter((node) => !currentLabels.has(node.label))
    .map((node) => node.label);

  const nodeDelta =
    currentNodes.length - previousNodes.length;

  const connectionDelta =
    currentConnections.length -
    previousConnections.length;

  const productionReadinessDelta =
    (current.productionReadinessScore || 0) -
    (previous.productionReadinessScore || 0);

  const addedConnections =
    connectionDelta > 0 ? connectionDelta : 0;

  const removedConnections =
    connectionDelta < 0 ? Math.abs(connectionDelta) : 0;

  const summary: string[] = [];
  const aiInsights: string[] = [];
  const driftWarnings: string[] = [];

  if (addedServices.length > 0) {
    summary.push(
      `${addedServices.length} infrastructure services introduced`
    );
  }

  if (removedServices.length > 0) {
    summary.push(
      `${removedServices.length} infrastructure services removed`
    );
  }

  if (addedConnections > 0) {
    summary.push(
      `${addedConnections} infrastructure connections added`
    );
  }

  if (removedConnections > 0) {
    summary.push(
      `${removedConnections} infrastructure connections removed`
    );
  }

  if (productionReadinessDelta > 0) {
    summary.push(
      `Production readiness improved by ${productionReadinessDelta} points`
    );
  }

  if (productionReadinessDelta < 0) {
    summary.push(
      `Production readiness decreased by ${Math.abs(
        productionReadinessDelta
      )} points`
    );
  }

  // =========================
  // AI INFRASTRUCTURE INSIGHTS
  // =========================

  if (serviceIncludes(addedServices, "redis")) {
    aiInsights.push(
      "Redis introduction may improve application response latency and caching efficiency."
    );
  }

  if (
    serviceIncludes(addedServices, "load balancer") ||
    serviceIncludes(addedServices, "alb") ||
    serviceIncludes(addedServices, "elb")
  ) {
    aiInsights.push(
      "Load balancer addition improves high availability and traffic distribution."
    );
  }

  if (
    serviceIncludes(addedServices, "monitor") ||
    serviceIncludes(addedServices, "observability") ||
    serviceIncludes(addedServices, "cloudwatch") ||
    serviceIncludes(addedServices, "logging")
  ) {
    aiInsights.push(
      "Observability services may improve incident detection and operational visibility."
    );
  }

  if (
    serviceIncludes(addedServices, "database") ||
    serviceIncludes(addedServices, "rds") ||
    serviceIncludes(addedServices, "postgres") ||
    serviceIncludes(addedServices, "supabase")
  ) {
    aiInsights.push(
      "Database layer expansion may improve persistence capability but should be reviewed for backup, scaling, and access controls."
    );
  }

  if (
    serviceIncludes(addedServices, "security") ||
    serviceIncludes(addedServices, "waf") ||
    serviceIncludes(addedServices, "iam") ||
    serviceIncludes(addedServices, "firewall")
  ) {
    aiInsights.push(
      "Security infrastructure additions may improve production hardening and identity boundaries."
    );
  }

  if (
    serviceIncludes(removedServices, "security") ||
    serviceIncludes(removedServices, "waf") ||
    serviceIncludes(removedServices, "iam") ||
    serviceIncludes(removedServices, "firewall")
  ) {
    aiInsights.push(
      "Security infrastructure removal may increase operational risk exposure."
    );
  }

  if (
    serviceIncludes(removedServices, "monitor") ||
    serviceIncludes(removedServices, "observability") ||
    serviceIncludes(removedServices, "cloudwatch") ||
    serviceIncludes(removedServices, "logging")
  ) {
    aiInsights.push(
      "Removing observability services may reduce incident detection and operational visibility."
    );
  }

  if (addedConnections >= 2) {
    aiInsights.push(
      "Topology complexity increased. Validate service communication paths and deployment dependencies."
    );
  }

  if (removedConnections >= 2) {
    aiInsights.push(
      "Multiple infrastructure links were removed. Validate that no critical services became disconnected."
    );
  }

  if (productionReadinessDelta >= 10) {
    aiInsights.push(
      "Production readiness significantly improved after infrastructure evolution."
    );
  }

  if (productionReadinessDelta <= -10) {
    aiInsights.push(
      "Production readiness declined substantially. Review deployment stability before release."
    );
  }

  // =========================
  // DRIFT DETECTION ENGINE
  // =========================

  if (
    serviceIncludes(removedServices, "monitor") ||
    serviceIncludes(removedServices, "observability")
  ) {
    driftWarnings.push(
      "WARNING: Monitoring infrastructure removed from topology. Operational visibility may be degraded."
    );
  }

  if (
    serviceIncludes(removedServices, "security") ||
    serviceIncludes(removedServices, "waf") ||
    serviceIncludes(removedServices, "firewall")
  ) {
    driftWarnings.push(
      "WARNING: Security services removed from architecture. Production exposure risk increased."
    );
  }

  if (
    serviceIncludes(removedServices, "database") ||
    serviceIncludes(removedServices, "postgres") ||
    serviceIncludes(removedServices, "rds")
  ) {
    driftWarnings.push(
      "WARNING: Database infrastructure removal detected. Validate persistence and backup integrity."
    );
  }

  if (removedConnections >= 3) {
    driftWarnings.push(
      "WARNING: Significant topology disconnection detected. Potential orphaned infrastructure paths identified."
    );
  }

  if (productionReadinessDelta <= -15) {
    driftWarnings.push(
      "WARNING: Major production readiness degradation detected between snapshots."
    );
  }

  if (nodeDelta <= -3) {
    driftWarnings.push(
      "WARNING: Multiple infrastructure services removed. Validate deployment dependencies and service availability."
    );
  }

  if (driftWarnings.length === 0) {
    driftWarnings.push(
      "No major infrastructure drift or topology integrity issues detected."
    );
  }

  // =========================
  // DEFAULTS
  // =========================

  if (summary.length === 0) {
    summary.push("No major infrastructure changes detected");
  }

  if (aiInsights.length === 0) {
    aiInsights.push(
      "AI analysis detected no major operational impact between these snapshots."
    );
  }

  let riskLevel: "low" | "medium" | "high" = "low";

  if (
    removedServices.length >= 2 ||
    productionReadinessDelta <= -15
  ) {
    riskLevel = "high";
  } else if (
    removedServices.length >= 1 ||
    productionReadinessDelta < 0
  ) {
    riskLevel = "medium";
  }

  return {
    addedServices,
    removedServices,
    addedConnections,
    removedConnections,
    nodeDelta,
    connectionDelta,
    productionReadinessDelta,
    riskLevel,
    summary,
    aiInsights,
    driftWarnings,
  };
}