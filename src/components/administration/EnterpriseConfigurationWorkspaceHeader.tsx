import { BadgeCheck, FileCog, ShieldCheck } from "lucide-react";

export default function EnterpriseConfigurationWorkspaceHeader() {
  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FileCog className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium text-primary">
              Enterprise Configuration Workspace
            </p>
          </div>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight">
            White-Label Configuration Control Plane
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-muted-foreground">
            Centralized workspace for managing enterprise configuration health,
            validation readiness, dependency visibility, and white-label SaaS
            administration controls.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-80">
          <StatusBadge
            label="Workspace Status"
            value="Operational"
            icon={BadgeCheck}
          />

          <StatusBadge
            label="Configuration Mode"
            value="Enterprise"
            icon={ShieldCheck}
          />
        </div>
      </div>
    </section>
  );
}

type StatusBadgeProps = {
  label: string;
  value: string;
  icon: typeof BadgeCheck;
};

function StatusBadge({ label, value, icon: Icon }: StatusBadgeProps) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </div>

      <p className="mt-2 text-sm font-semibold">{value}</p>
    </div>
  );
}