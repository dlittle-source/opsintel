import {
  Image,
  LayoutDashboard,
  Monitor,
  PanelLeft,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { getAdministrationContext } from "@/lib/administrationContextEngine";
import { getEnterpriseMetadata } from "@/lib/enterpriseMetadataEngine";
import { getEnterpriseStatus } from "@/lib/enterpriseStatusEngine";

function getStringValue(
  source: Record<string, unknown>,
  keys: string[],
  fallback: string,
) {
  for (const key of keys) {
    const value = source[key];

    if (typeof value === "string" && value.length > 0) {
      return value;
    }
  }

  return fallback;
}

export default function LogoManagementPanel() {
  const context = getAdministrationContext() as unknown as Record<
    string,
    unknown
  >;

  const metadata = getEnterpriseMetadata() as unknown as Record<
    string,
    unknown
  >;

  const status = getEnterpriseStatus() as unknown as Record<string, unknown>;

  const defaultLogo = getStringValue(
    context,
    ["defaultLogo", "primaryLogo", "logo"],
    "/branding/logo.svg",
  );

  const compactLogo = getStringValue(
    context,
    ["compactLogo", "mobileLogo"],
    "/branding/logo-compact.svg",
  );

  const loginLogo = getStringValue(
    context,
    ["loginLogo", "authLogo"],
    "/branding/login-logo.svg",
  );

  const dashboardLogo = getStringValue(
    context,
    ["dashboardLogo", "workspaceLogo"],
    "/branding/dashboard-logo.svg",
  );

  const sidebarLogo = getStringValue(
    context,
    ["sidebarLogo", "navigationLogo"],
    "/branding/logo.svg",
  );

  const favicon = getStringValue(
    context,
    ["favicon", "faviconUrl", "browserIcon"],
    "/branding/favicon.ico",
  );

  const logoStatus = getStringValue(
    status,
    ["logoStatus", "assetStatus", "platformStatus"],
    "Linked",
  );

  const platformName = getStringValue(
    metadata,
    ["platformName", "name", "productName"],
    "OpsIntel",
  );

  const logoAssets = [
    {
      label: "Default Logo",
      value: defaultLogo,
      icon: Image,
    },
    {
      label: "Compact Logo",
      value: compactLogo,
      icon: Smartphone,
    },
    {
      label: "Login Logo",
      value: loginLogo,
      icon: ShieldCheck,
    },
    {
      label: "Dashboard Logo",
      value: dashboardLogo,
      icon: LayoutDashboard,
    },
    {
      label: "Sidebar Logo",
      value: sidebarLogo,
      icon: PanelLeft,
    },
    {
      label: "Favicon",
      value: favicon,
      icon: Monitor,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Logo Management
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Enterprise Brand Asset Registry
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Centralized logo and browser asset references used across the active
            white-label configuration for {platformName}.
          </p>
        </div>

        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
          {logoStatus}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {logoAssets.map((asset) => {
          const Icon = asset.icon;

          return (
            <div
              key={asset.label}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {asset.label}
              </p>

              <p className="mt-2 break-all text-sm font-semibold text-slate-100">
                {asset.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}