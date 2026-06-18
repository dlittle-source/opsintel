import {
  Building2,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  ShieldCheck,
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

export default function CompanyProfilePanel() {
  const context = getAdministrationContext() as unknown as Record<
    string,
    unknown
  >;

  const metadata = getEnterpriseMetadata();
  const status = getEnterpriseStatus();

  const organizationName = getStringValue(
    context,
    ["organizationName", "companyName", "tenantName", "name"],
    "OpsIntel Enterprise",
  );

  const supportEmail = getStringValue(
    context,
    ["supportEmail", "adminEmail", "contactEmail"],
    "support@opsintel.ai",
  );

  const primaryDomain = getStringValue(
    context,
    ["primaryDomain", "domain", "companyDomain"],
    "opsintel.ai",
  );

  const operatingRegion = getStringValue(
    context,
    ["operatingRegion", "region", "deploymentRegion"],
    "North America",
  );

  const companyProfile = [
    {
      label: "Organization",
      value: organizationName,
      icon: Building2,
    },
    {
      label: "Platform",
      value: metadata.platformName,
      icon: ShieldCheck,
    },
    {
      label: "Support Email",
      value: supportEmail,
      icon: Mail,
    },
    {
      label: "Primary Domain",
      value: primaryDomain,
      icon: Globe,
    },
    {
      label: "Region",
      value: operatingRegion,
      icon: MapPin,
    },
    {
      label: "Enterprise Status",
      value: status.platformStatus,
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Company Profile
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          Enterprise Organization Identity
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Centralized company, support, domain, and operating-region details
          used across the OpsIntel white-label administration layer.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {companyProfile.map((item) => {
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