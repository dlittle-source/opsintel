import {
  Activity,
  BadgeCheck,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const runtimeSummaryItems = [
  {
    label: "Runtime State",
    value: "Operational",
    icon: Activity,
  },
  {
    label: "Licensing",
    value: "Resolved",
    icon: ShieldCheck,
  },
  {
    label: "Tenant Status",
    value: "Active",
    icon: CheckCircle2,
  },
  {
    label: "Capabilities",
    value: "Enabled",
    icon: Layers,
  },
  {
    label: "Feature Flags",
    value: "Active",
    icon: Sparkles,
  },
  {
    label: "Tenant Readiness",
    value: "Enterprise Ready",
    icon: BadgeCheck,
  },
];

export default function EnterpriseTenantRuntimeSummary() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Enterprise Tenant Runtime Summary
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Executive overview of the active tenant runtime, licensing posture,
          feature resolution, and platform readiness.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {runtimeSummaryItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-lg border bg-background p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />

                <span className="text-sm font-medium">{item.label}</span>
              </div>

              <div className="mt-2 text-base font-semibold">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}