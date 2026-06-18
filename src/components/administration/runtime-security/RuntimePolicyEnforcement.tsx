import {
  FileCheck,
  LockKeyhole,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function RuntimePolicyEnforcement() {
  const policies = [
    {
      label: "Security Policies",
      value: "42 Active",
      icon: FileCheck,
    },
    {
      label: "Access Controls",
      value: "Enforced",
      icon: LockKeyhole,
    },
    {
      label: "Compliance Rules",
      value: "Healthy",
      icon: ShieldCheck,
    },
    {
      label: "Automated Governance",
      value: "Enabled",
      icon: Workflow,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Policy Enforcement
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Continuous enforcement of security policies, access controls,
          compliance requirements, and automated governance mechanisms
          throughout the enterprise runtime.
        </p>
      </div>

      <div className="space-y-4">
        {policies.map((policy) => {
          const Icon = policy.icon;

          return (
            <div
              key={policy.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {policy.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {policy.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}