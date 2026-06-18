import { getEnterpriseFeatureRegistry } from "@/lib/enterpriseFeatureRegistry";

export interface EnterpriseCapabilities {
  administrationEnabled: boolean;
  brandingEnabled: boolean;
  whiteLabelEnabled: boolean;
  multiTenantEnabled: boolean;
  commercialReady: boolean;
}

export function getEnterpriseCapabilities(): EnterpriseCapabilities {
  const features = getEnterpriseFeatureRegistry();

  return {
    administrationEnabled: features.administration,
    brandingEnabled: features.branding,
    whiteLabelEnabled: features.whiteLabel,
    multiTenantEnabled: features.multiTenant,
    commercialReady:
      features.administration &&
      features.branding &&
      features.whiteLabel &&
      features.multiTenant,
  };
}