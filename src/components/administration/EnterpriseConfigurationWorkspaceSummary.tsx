import {
  BadgeCheck,
  CheckCircle2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const summaryCards = [
  {
    title: "Registered Modules",
    value: "6",
    description: "Enterprise configuration modules",
    icon: Layers3,
  },
  {
    title: "Validation Status",
    value: "Passed",
    description: "All configuration checks successful",
    icon: CheckCircle2,
  },
  {
    title: "White-Label Ready",
    value: "Enabled",
    description: "Tenant customization available",
    icon: ShieldCheck,
  },
  {
    title: "Workspace Health",
    value: "Healthy",
    description: "Configuration control plane operational",
    icon: BadgeCheck,
  },
];

export default function EnterpriseConfigurationWorkspaceSummary() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border bg-card p-5 transition hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-lg border bg-background p-2">
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
    </section>
  );
}