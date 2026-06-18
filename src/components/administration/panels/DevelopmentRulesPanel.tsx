import { Code2, GitBranch, ShieldCheck, ToggleLeft } from "lucide-react";

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

function getBooleanLabel(
  source: Record<string, unknown>,
  keys: string[],
  fallback: boolean,
) {
  for (const key of keys) {
    const value = source[key];

    if (typeof value === "boolean") {
      return value ? "Enabled" : "Disabled";
    }
  }

  return fallback ? "Enabled" : "Disabled";
}

export default function DevelopmentRulesPanel() {
  const context = getAdministrationContext() as unknown as Record<
    string,
    unknown
  >;

  const metadata = getEnterpriseMetadata() as unknown as Record<
    string,
    unknown
  >;

  const status = getEnterpriseStatus() as unknown as Record<string, unknown>;

  const whiteLabelEnabled = getBooleanLabel(
    context,
    ["whiteLabelEnabled", "isWhiteLabelEnabled", "tenantBrandingEnabled"],
    true,
  );

  const developmentMode = getBooleanLabel(
    context,
    ["developmentMode", "isDevelopmentMode", "debugMode"],
    false,
  );

  const platformName = getStringValue(
    metadata,
    ["platformName", "name", "productName"],
    "OpsIntel",
  );

  const governanceStatus = getStringValue(
    status,
    ["governanceStatus", "rulesStatus", "platformStatus"],
    "Enforced",
  );

  const rules = [
    {
      label: "White-Label Enabled",
      value: whiteLabelEnabled,
      icon: ShieldCheck,
    },
    {
      label: "Development Mode",
      value: developmentMode,
      icon: Code2,
    },
    {
      label: "Configuration Governance",
      value: governanceStatus,
      icon: GitBranch,
    },
    {
      label: "Runtime Control",
      value: "Enterprise Managed",
      icon: ToggleLeft,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Development Rules
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          Enterprise Configuration Governance
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Centralized development, white-label, and governance controls for the
          active enterprise configuration powering {platformName}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {rules.map((rule) => {
          const Icon = rule.icon;

          return (
            <div
              key={rule.label}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {rule.label}
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-100">
                {rule.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}