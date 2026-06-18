import { getActiveWhiteLabelProfile } from "@/lib/whiteLabelProfiles";

export type WhiteLabelAdminStatus = "active" | "draft" | "disabled";

export interface WhiteLabelAdminTenant {
  tenantId: string;
  status: WhiteLabelAdminStatus;

  companyName: string;
  platformName: string;
  platformDescription: string;

  licensingTier: string;

  supportEmail: string;
  website: string;

  defaultLogo: string;
  compactLogo: string;
  loginLogo: string;
  dashboardLogo: string;
  sidebarLogo: string;
  favicon: string;

  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;

  sidebarTheme: string;
  executiveTheme: string;
  buttonStyle: string;
  borderRadius: string;

  developmentMode: boolean;
  whiteLabelEnabled: boolean;
}

export function getWhiteLabelAdminTenant(): WhiteLabelAdminTenant {
  const profile = getActiveWhiteLabelProfile();

  return {
    tenantId: profile.tenantId,
    status: "active",

    companyName: profile.companyName,
    platformName: profile.platformName,
    platformDescription: profile.platformDescription,

    licensingTier: profile.licensingTier,

    supportEmail: profile.supportEmail,
    website: profile.website,

    defaultLogo: profile.logos.defaultLogo,
    compactLogo: profile.logos.compactLogo,
    loginLogo: profile.logos.loginLogo,
    dashboardLogo: profile.logos.dashboardLogo,
    sidebarLogo: profile.logos.sidebarLogo,
    favicon: profile.logos.favicon,

    primaryColor: profile.theme.primaryColor,
    secondaryColor: profile.theme.secondaryColor,
    accentColor: profile.theme.accentColor,
    backgroundColor: profile.theme.backgroundColor,

    sidebarTheme: profile.theme.sidebarTheme,
    executiveTheme: profile.theme.executiveTheme,
    buttonStyle: profile.theme.buttonStyle,
    borderRadius: profile.theme.borderRadius,

    developmentMode: true,
    whiteLabelEnabled: true,
  };
}

export function getWhiteLabelAdminSummary() {
  const tenant = getWhiteLabelAdminTenant();

  return {
    title: "White-Label Administration Center",
    description:
      "Centralized enterprise administration layer for managing tenant identity, branding, themes, licensing, and platform configuration.",

    activeTenant: tenant.companyName,
    platformName: tenant.platformName,
    licensingTier: tenant.licensingTier,
    status: tenant.status,

    configurationHealth: tenant.whiteLabelEnabled ? "Operational" : "Disabled",
    developmentMode: tenant.developmentMode ? "Enabled" : "Disabled",
  };
}