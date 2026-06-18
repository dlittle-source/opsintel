import { getOrganizationProfile } from "@/lib/organizationProfileEngine";
import { getTenantBranding } from "@/lib/tenantBrandingEngine";
import { getTenantLogoConfig } from "@/lib/logoManagementEngine";
import { getThemeConfiguration } from "@/lib/themeConfigurationEngine";
import { getWhiteLabelConfiguration } from "@/lib/whiteLabelConfigurationEngine";

export interface EnterpriseConfiguration {
  organization: ReturnType<typeof getOrganizationProfile>;
  branding: ReturnType<typeof getTenantBranding>;
  logos: ReturnType<typeof getTenantLogoConfig>;
  theme: ReturnType<typeof getThemeConfiguration>;
  whiteLabel: ReturnType<typeof getWhiteLabelConfiguration>;
}

export function getEnterpriseConfiguration(): EnterpriseConfiguration {
  return {
    organization: getOrganizationProfile(),
    branding: getTenantBranding(),
    logos: getTenantLogoConfig(),
    theme: getThemeConfiguration(),
    whiteLabel: getWhiteLabelConfiguration(),
  };
}