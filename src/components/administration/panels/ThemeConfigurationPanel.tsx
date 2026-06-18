import {
  AppWindow,
  Brush,
  Frame,
  LayoutPanelLeft,
  MousePointerClick,
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

export default function ThemeConfigurationPanel() {
  const context = getAdministrationContext() as unknown as Record<
    string,
    unknown
  >;

  const metadata = getEnterpriseMetadata() as unknown as Record<
    string,
    unknown
  >;

  const status = getEnterpriseStatus() as unknown as Record<string, unknown>;

  const sidebarTheme = getStringValue(
    context,
    ["sidebarTheme", "navigationTheme", "sideNavTheme"],
    "dark",
  );

  const executiveTheme = getStringValue(
    context,
    ["executiveTheme", "workspaceTheme", "dashboardTheme"],
    "enterprise",
  );

  const buttonStyle = getStringValue(
    context,
    ["buttonStyle", "ctaStyle", "actionStyle"],
    "gradient",
  );

  const borderRadius = getStringValue(
    context,
    ["borderRadius", "radius", "cornerStyle"],
    "large",
  );

  const platformName = getStringValue(
    metadata,
    ["platformName", "name", "productName"],
    "OpsIntel",
  );

  const themeStatus = getStringValue(
    status,
    ["themeStatus", "configurationStatus", "platformStatus"],
    "Active",
  );

  const themeRows = [
    {
      label: "Sidebar Theme",
      value: sidebarTheme,
      icon: LayoutPanelLeft,
    },
    {
      label: "Executive Theme",
      value: executiveTheme,
      icon: AppWindow,
    },
    {
      label: "Button Style",
      value: buttonStyle,
      icon: MousePointerClick,
    },
    {
      label: "Border Radius",
      value: borderRadius,
      icon: Frame,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Theme Configuration
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Enterprise Interface Styling
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Centralized UI theme controls for the active white-label
            configuration powering {platformName}.
          </p>
        </div>

        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
          {themeStatus}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {themeRows.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </p>

              <p className="mt-2 break-all text-sm font-semibold text-slate-100">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}