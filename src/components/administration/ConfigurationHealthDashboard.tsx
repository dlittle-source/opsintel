import {
  CheckCircle2,
  Database,
 GitBranch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const metrics = [
  {
    title: "Configuration Coverage",
    value: "100%",
    description: "All enterprise modules registered",
    icon: Database,
  },
  {
    title: "Registry Status",
    value: "Healthy",
    description: "Registry synchronized",
    icon: Workflow,
  },
  {
    title: "Validation Status",
    value: "Passed",
    description: "No validation failures detected",
    icon: CheckCircle2,
  },
  {
    title: "Dependency Resolution",
    value: "Resolved",
    description: "All configuration dependencies satisfied",
    icon: GitBranch,
  },
  {
    title: "White-Label Readiness",
    value: "Enabled",
    description: "Tenant customization available",
    icon: Sparkles,
  },
  {
    title: "Production Readiness",
    value: "Ready",
    description: "Enterprise configuration verified",
    icon: ShieldCheck,
  },
];

export default function ConfigurationHealthDashboard() {
  return (
    <section className="rounded-xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Configuration Health Dashboard
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Executive overview of enterprise configuration integrity,
          validation status, dependency resolution, and white-label
          platform readiness.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="rounded-lg border bg-background p-5 transition hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                  {metric.value}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-semibold">
                {metric.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-6">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}