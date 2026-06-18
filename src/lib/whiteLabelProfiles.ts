export type WhiteLabelProfileKey =
  | "opsintel"
  | "acme-consulting"
  | "cloudforge"
  | "contoso-enterprise";

export type WhiteLabelProfile = {
  tenantId: string;
  companyName: string;
  platformName: string;
  platformDescription: string;
  licensingTier: "starter" | "professional" | "enterprise" | "white-label";
  supportEmail: string;
  website: string;

  logos: {
    defaultLogo: string;
    compactLogo: string;
    loginLogo: string;
    dashboardLogo: string;
    sidebarLogo: string;
    favicon: string;
  };

  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    sidebarTheme: "dark" | "light" | "glass";
    executiveTheme: "enterprise" | "premium" | "command";
    buttonStyle: "solid" | "gradient" | "outline";
    borderRadius: "none" | "sm" | "md" | "lg" | "xl" | "full";
  };
};

export const activeWhiteLabelProfile: WhiteLabelProfileKey = "opsintel";

export const whiteLabelProfiles: Record<
  WhiteLabelProfileKey,
  WhiteLabelProfile
> = {
  opsintel: {
    tenantId: "opsintel",
    companyName: "OpsIntel",
    platformName: "OpsIntel",
    platformDescription:
      "AI-Powered Executive Infrastructure Intelligence Platform",
    licensingTier: "white-label",
    supportEmail: "support@opsintel.ai",
    website: "https://opsintel.ai",

    logos: {
      defaultLogo: "/branding/logo.svg",
      compactLogo: "/branding/logo-compact.svg",
      loginLogo: "/branding/login-logo.svg",
      dashboardLogo: "/branding/dashboard-logo.svg",
      sidebarLogo: "/branding/logo-compact.svg",
      favicon: "/branding/favicon.ico",
    },

    theme: {
      primaryColor: "#2563eb",
      secondaryColor: "#0f172a",
      accentColor: "#22d3ee",
      backgroundColor: "#020617",
      sidebarTheme: "dark",
      executiveTheme: "enterprise",
      buttonStyle: "gradient",
      borderRadius: "xl",
    },
  },

  "acme-consulting": {
    tenantId: "acme-consulting",
    companyName: "ACME Consulting",
    platformName: "ACME Ops Intelligence",
    platformDescription:
      "Executive infrastructure intelligence for consulting delivery teams.",
    licensingTier: "professional",
    supportEmail: "support@acmeconsulting.com",
    website: "https://acmeconsulting.com",

    logos: {
      defaultLogo: "/branding/logo.svg",
      compactLogo: "/branding/logo-compact.svg",
      loginLogo: "/branding/login-logo.svg",
      dashboardLogo: "/branding/dashboard-logo.svg",
      sidebarLogo: "/branding/logo-compact.svg",
      favicon: "/branding/favicon.ico",
    },

    theme: {
      primaryColor: "#7c3aed",
      secondaryColor: "#111827",
      accentColor: "#a78bfa",
      backgroundColor: "#030712",
      sidebarTheme: "glass",
      executiveTheme: "premium",
      buttonStyle: "gradient",
      borderRadius: "lg",
    },
  },

  cloudforge: {
    tenantId: "cloudforge",
    companyName: "CloudForge",
    platformName: "CloudForge Command",
    platformDescription:
      "Cloud operations intelligence for infrastructure modernization teams.",
    licensingTier: "enterprise",
    supportEmail: "support@cloudforge.io",
    website: "https://cloudforge.io",

    logos: {
      defaultLogo: "/branding/logo.svg",
      compactLogo: "/branding/logo-compact.svg",
      loginLogo: "/branding/login-logo.svg",
      dashboardLogo: "/branding/dashboard-logo.svg",
      sidebarLogo: "/branding/logo-compact.svg",
      favicon: "/branding/favicon.ico",
    },

    theme: {
      primaryColor: "#0891b2",
      secondaryColor: "#0f172a",
      accentColor: "#67e8f9",
      backgroundColor: "#020617",
      sidebarTheme: "dark",
      executiveTheme: "command",
      buttonStyle: "outline",
      borderRadius: "xl",
    },
  },

  "contoso-enterprise": {
    tenantId: "contoso-enterprise",
    companyName: "Contoso Enterprise",
    platformName: "Contoso Executive Intelligence",
    platformDescription:
      "Enterprise readiness, governance, compliance, and infrastructure intelligence.",
    licensingTier: "enterprise",
    supportEmail: "support@contoso.com",
    website: "https://contoso.com",

    logos: {
      defaultLogo: "/branding/logo.svg",
      compactLogo: "/branding/logo-compact.svg",
      loginLogo: "/branding/login-logo.svg",
      dashboardLogo: "/branding/dashboard-logo.svg",
      sidebarLogo: "/branding/logo-compact.svg",
      favicon: "/branding/favicon.ico",
    },

    theme: {
      primaryColor: "#1d4ed8",
      secondaryColor: "#172554",
      accentColor: "#60a5fa",
      backgroundColor: "#020617",
      sidebarTheme: "light",
      executiveTheme: "enterprise",
      buttonStyle: "solid",
      borderRadius: "md",
    },
  },
};

export function getActiveWhiteLabelProfile(): WhiteLabelProfile {
  return whiteLabelProfiles[activeWhiteLabelProfile];
}