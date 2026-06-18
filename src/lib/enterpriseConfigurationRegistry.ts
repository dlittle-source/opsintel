import { getAdministrationContext } from "@/lib/administrationContextEngine";
import { getEnterpriseConfiguration } from "@/lib/enterpriseConfigurationEngine";
import { getOrganizationProfile } from "@/lib/organizationProfileEngine";
import { getTenantBranding } from "@/lib/tenantBrandingEngine";
import { getThemeConfiguration } from "@/lib/themeConfigurationEngine";
import { getWhiteLabelConfiguration } from "@/lib/whiteLabelConfigurationEngine";

export interface EnterpriseConfigurationRegistry {
  administration: ReturnType<typeof getAdministrationContext>;
  configuration: ReturnType<typeof getEnterpriseConfiguration>;
  organization: ReturnType<typeof getOrganizationProfile>;
  branding: ReturnType<typeof getTenantBranding>;
  theme: ReturnType<typeof getThemeConfiguration>;
  whiteLabel: ReturnType<typeof getWhiteLabelConfiguration>;
}

export function getEnterpriseConfigurationRegistry(): EnterpriseConfigurationRegistry {
  return {
    administration: getAdministrationContext(),
    configuration: getEnterpriseConfiguration(),
    organization: getOrganizationProfile(),
    branding: getTenantBranding(),
    theme: getThemeConfiguration(),
    whiteLabel: getWhiteLabelConfiguration(),
  };
}