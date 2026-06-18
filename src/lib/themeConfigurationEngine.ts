import { getActiveWhiteLabelProfile } from "@/lib/whiteLabelProfiles";

export type SidebarTheme = "dark" | "light" | "glass";
export type ExecutiveTheme = "enterprise" | "premium" | "command";
export type ButtonStyle = "solid" | "gradient" | "outline";
export type BorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export type TenantThemeConfiguration = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  sidebarTheme: SidebarTheme;
  executiveTheme: ExecutiveTheme;
  buttonStyle: ButtonStyle;
  borderRadius: BorderRadius;
};

export function getThemeConfiguration(): TenantThemeConfiguration {
  const profile = getActiveWhiteLabelProfile();

  return {
    primaryColor: profile.theme.primaryColor,
    secondaryColor: profile.theme.secondaryColor,
    accentColor: profile.theme.accentColor,
    backgroundColor: profile.theme.backgroundColor,
    sidebarTheme: profile.theme.sidebarTheme,
    executiveTheme: profile.theme.executiveTheme,
    buttonStyle: profile.theme.buttonStyle,
    borderRadius: profile.theme.borderRadius,
  };
}

export function getThemeCssVariables(): Record<string, string> {
  const theme = getThemeConfiguration();

  return {
    "--tenant-primary-color": theme.primaryColor,
    "--tenant-secondary-color": theme.secondaryColor,
    "--tenant-accent-color": theme.accentColor,
    "--tenant-background-color": theme.backgroundColor,
  };
}

export function getSidebarThemeClasses(): string {
  const theme = getThemeConfiguration();

  switch (theme.sidebarTheme) {
    case "light":
      return "border-slate-200 bg-white text-slate-900";
    case "glass":
      return "border-white/10 bg-white/10 text-white backdrop-blur-xl";
    case "dark":
    default:
      return "border-white/10 bg-slate-950 text-white";
  }
}

export function getExecutiveThemeClasses(): string {
  const theme = getThemeConfiguration();

  switch (theme.executiveTheme) {
    case "premium":
      return "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white";
    case "command":
      return "bg-gradient-to-br from-slate-950 via-cyan-950 to-black text-white";
    case "enterprise":
    default:
      return "bg-slate-950 text-white";
  }
}

export function getButtonThemeClasses(): string {
  const theme = getThemeConfiguration();

  switch (theme.buttonStyle) {
    case "solid":
      return "bg-blue-600 text-white hover:bg-blue-500";
    case "outline":
      return "border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10";
    case "gradient":
    default:
      return "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400";
  }
}

export function getBorderRadiusClass(): string {
  const theme = getThemeConfiguration();

  switch (theme.borderRadius) {
    case "none":
      return "rounded-none";
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "full":
      return "rounded-full";
    case "xl":
    default:
      return "rounded-xl";
  }
}