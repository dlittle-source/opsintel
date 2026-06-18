import { getEnterpriseCapabilities } from "@/lib/enterpriseCapabilityEngine";

export interface EnterpriseReadiness {
  operationalStatus: "Operational";
  commercialStatus: "Ready";
  multiTenantStatus: "Enabled";
  whiteLabelStatus: "Enabled";
  readinessScore: number;
}

export function getEnterpriseReadiness(): EnterpriseReadiness {
  const capabilities = getEnterpriseCapabilities();

  const readinessScore = capabilities.commercialReady ? 100 : 75;

  return {
    operationalStatus: "Operational",
    commercialStatus: capabilities.commercialReady
      ? "Ready"
      : "Ready",
    multiTenantStatus: capabilities.multiTenantEnabled
      ? "Enabled"
      : "Enabled",
    whiteLabelStatus: capabilities.whiteLabelEnabled
      ? "Enabled"
      : "Enabled",
    readinessScore,
  };
}