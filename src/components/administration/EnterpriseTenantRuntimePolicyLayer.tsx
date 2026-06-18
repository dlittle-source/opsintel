import {
  FileCheck,
  Lock,
  Shield,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";

const policies = [
  {
    title: "Access Control",
    description:
      "Runtime access is governed by tenant-specific authorization policies.",
    icon: UserCheck,
  },
  {
    title: "License Enforcement",
    description:
      "Commercial licensing determines available runtime capabilities.",
    icon: ShieldCheck,
  },
  {
    title: "Security Isolation",
    description:
      "Tenant resources remain logically isolated across the platform.",
    icon: Lock,
  },
  {
    title: "Compliance Policies",
    description:
      "Operational controls align with enterprise governance requirements.",
    icon: FileCheck,
  },
  {
    title: "Workflow Policies",
    description:
      "Runtime workflows execute only when policy conditions are satisfied.",
    icon: Workflow,
  },
  {
    title: "Policy Status",
    description:
      "All runtime policy evaluations completed successfully.",
    icon: Shield,
  },
];

export default function EnterpriseTenantRuntimePolicyLayer() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Enterprise Runtime Policy Layer
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Enterprise policy controls governing runtime authorization,
          licensing, isolation, and operational enforcement.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {policies.map((policy) => {
          const Icon = policy.icon;

          return (
            <div
              key={policy.title}
              className="rounded-lg border bg-background p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />

                <span className="text-sm font-medium">
                  {policy.title}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {policy.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}