import {
  BadgeCheck,
  FileText,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getAdministrationContext } from "@/lib/administrationContextEngine";
import { getEnterpriseMetadata } from "@/lib/enterpriseMetadataEngine";
import { getEnterpriseStatus } from "@/lib/enterpriseStatusEngine";
import { getEnterpriseVersion } from "@/lib/enterpriseVersionEngine";

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

export default function PlatformIdentityPanel() {
  const context = getAdministrationContext() as unknown as Record<
    string,
    unknown
  >;

  const metadata = getEnterpriseMetadata() as unknown as Record<
    string,
    unknown
  >;

  const status = getEnterpriseStatus() as unknown as Record<string, unknown>;

  const version = getEnterpriseVersion() as unknown as Record<string, unknown>;

  const platformName = getStringValue(
    metadata,
    ["platformName", "name", "productName"],
    "OpsIntel",
  );

  const platformDescription = getStringValue(
    metadata,
    ["platformDescription", "description", "summary"],
    "AI-powered executive infrastructure intelligence platform.",
  );

  const administrationMode = getStringValue(
    context,
    ["administrationMode", "mode", "configurationMode"],
    "Enterprise Administration",
  );

  const platformStatus = getStringValue(
    status,
    ["platformStatus", "status", "systemStatus"],
    "Operational",
  );

  const licensingTier = getStringValue(
    metadata,
    ["licensingTier", "tier", "subscriptionTier"],
    "Professional White-Label",
  );

  const versionLabel = getStringValue(
    version,
    ["versionLabel", "version", "releaseVersion"],
    "Enterprise Configuration v1.0",
  );

  const identityRows = [
    {
      label: "Platform Name",
      value: platformName,
      icon: Sparkles,
    },
    {
      label: "Platform Description",
      value: platformDescription,
      icon: FileText,
    },
    {
      label: "Administration Mode",
      value: administrationMode,
      icon: Layers3,
    },
    {
      label: "Platform Status",
      value: platformStatus,
      icon: BadgeCheck,
    },
    {
      label: "Licensing Tier",
      value: licensingTier,
      icon: ShieldCheck,
    },
    {
      label: "Enterprise Version",
      value: versionLabel,
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Platform Identity
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          Enterprise Platform Configuration
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Centralized platform identity, licensing, runtime status, and version
          metadata for the active white-label enterprise configuration.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {identityRows.map((item) => {
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

              <p className="mt-2 text-sm font-semibold text-slate-100">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}