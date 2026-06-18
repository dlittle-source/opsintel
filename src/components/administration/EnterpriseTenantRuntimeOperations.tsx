import { Activity, CheckCircle2, RefreshCw, ShieldCheck } from "lucide-react";

const operations = [
  {
    label: "Runtime Health Monitoring",
    status: "Active",
    icon: Activity,
  },
  {
    label: "Tenant Lifecycle Coordination",
    status: "Ready",
    icon: RefreshCw,
  },
  {
    label: "Operational Guardrails",
    status: "Enforced",
    icon: ShieldCheck,
  },
  {
    label: "Execution State Validation",
    status: "Healthy",
    icon: CheckCircle2,
  },
];

export default function EnterpriseTenantRuntimeOperations() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="text-lg font-semibold">Enterprise Runtime Operations</h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Monitors runtime execution, tenant lifecycle state, operational
        guardrails, and service readiness across the enterprise platform.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {operations.map((operation) => {
          const Icon = operation.icon;

          return (
            <div
              key={operation.label}
              className="rounded-lg border bg-background p-4"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-muted-foreground" />

                <div>
                  <p className="text-sm font-medium">{operation.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {operation.status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}