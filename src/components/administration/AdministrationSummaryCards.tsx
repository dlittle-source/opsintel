import {
  Building2,
  CheckCircle2,
  Palette,
  ShieldCheck,
} from "lucide-react";

import { getEnterpriseCapabilities } from "@/lib/enterpriseCapabilityEngine";
import { getEnterpriseMetadata } from "@/lib/enterpriseMetadataEngine";
import { getEnterpriseReadiness } from "@/lib/enterpriseReadinessEngine";

export default function AdministrationSummaryCards() {
  const capabilities = getEnterpriseCapabilities();
  const readiness = getEnterpriseReadiness();
  const metadata = getEnterpriseMetadata();

  const cards = [
    {
      title: "Platform",
      value: metadata.platformName,
      icon: Building2,
      description: `${metadata.edition} Edition`,
    },
    {
      title: "Commercial",
      value: readiness.commercialStatus,
      icon: CheckCircle2,
      description: `${readiness.readinessScore}% Readiness`,
    },
    {
      title: "White-Label",
      value: capabilities.whiteLabelEnabled ? "Enabled" : "Disabled",
      icon: Palette,
      description: metadata.deploymentMode,
    },
    {
      title: "Multi-Tenant",
      value: capabilities.multiTenantEnabled ? "Enabled" : "Disabled",
      icon: ShieldCheck,
      description: readiness.operationalStatus,
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {card.value}
                </h3>
              </div>

              <div className="rounded-lg bg-cyan-500/10 p-3">
                <Icon className="h-5 w-5 text-cyan-400" />
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              {card.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}