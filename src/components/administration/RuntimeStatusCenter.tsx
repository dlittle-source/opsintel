import {
  Activity,
  BadgeCheck,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { getEnterpriseRegistrySnapshot } from "@/lib/enterpriseConfigurationRegistryAdapter";
import { getEnterpriseValidationResult } from "@/lib/enterpriseConfigurationValidationService";

export default function RuntimeStatusCenter() {
  const registry = getEnterpriseRegistrySnapshot();
  const validation = getEnterpriseValidationResult();

  const cards = [
    {
      title: "Runtime State",
      value: registry.runtimeState,
      description: "Enterprise configuration runtime",
      icon: Activity,
    },
    {
      title: "Validation",
      value: validation.overallStatus,
      description: `${validation.healthyModules}/${validation.totalModules} modules healthy`,
      icon: BadgeCheck,
    },
    {
      title: "White-Label",
      value: registry.whiteLabelState,
      description: "Tenant customization status",
      icon: ShieldCheck,
    },
    {
      title: "Registered Modules",
      value: String(validation.totalModules),
      description: "Modules managed by runtime",
      icon: Layers3,
    },
  ];

  return (
    <section className="rounded-xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Runtime Status Center
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Live enterprise runtime summary powered by the configuration
          runtime engine and validation service.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-lg border bg-background p-5 transition hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                  {card.value}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-semibold">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}