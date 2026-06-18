import { getActiveWhiteLabelProfile } from "@/lib/whiteLabelProfiles";

export interface TenantBranding {
  organizationId: string;

  companyName: string;

  companyShortName: string;

  logoUrl: string;

  primaryColor: string;

  secondaryColor: string;

  accentColor: string;

  executiveWorkspaceName: string;

  intelligenceWorkspaceName: string;

  commercializationWorkspaceName: string;

  supportEmail: string;

  website: string;
}

export function getTenantBranding(): TenantBranding {
  const profile = getActiveWhiteLabelProfile();

  return {
    organizationId: profile.tenantId,

    companyName: profile.companyName,

    companyShortName: profile.companyName,

    logoUrl: profile.logos.defaultLogo,

    primaryColor: profile.theme.primaryColor,

    secondaryColor: profile.theme.secondaryColor,

    accentColor: profile.theme.accentColor,

    executiveWorkspaceName: "Executive Intelligence",

    intelligenceWorkspaceName: "Operational Intelligence",

    commercializationWorkspaceName: "Commercialization Intelligence",

    supportEmail: profile.supportEmail,

    website: profile.website,
  };
}