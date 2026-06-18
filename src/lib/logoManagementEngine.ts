import { getActiveWhiteLabelProfile } from "@/lib/whiteLabelProfiles";

export interface TenantLogoConfig {
  companyName: string;

  primaryLogo: string;
  compactLogo: string;

  sidebarLogo: string;
  dashboardLogo: string;
  loginLogo: string;

  favicon: string;
}

export function getTenantLogoConfig(): TenantLogoConfig {
  const profile = getActiveWhiteLabelProfile();

  return {
    companyName: profile.companyName,

    primaryLogo: profile.logos.defaultLogo,
    compactLogo: profile.logos.compactLogo,

    sidebarLogo: profile.logos.sidebarLogo,
    dashboardLogo: profile.logos.dashboardLogo,
    loginLogo: profile.logos.loginLogo,

    favicon: profile.logos.favicon,
  };
}