import { getEnterpriseConfiguration } from "@/lib/enterpriseConfigurationEngine";
import { getWhiteLabelAdminTenant } from "@/lib/whiteLabelAdminEngine";

export interface AdministrationContext {
  configuration: ReturnType<typeof getEnterpriseConfiguration>;
  tenant: ReturnType<typeof getWhiteLabelAdminTenant>;
  generatedAt: string;
  status: "Operational";
}

export function getAdministrationContext(): AdministrationContext {
  return {
    configuration: getEnterpriseConfiguration(),
    tenant: getWhiteLabelAdminTenant(),
    generatedAt: new Date().toISOString(),
    status: "Operational",
  };
}