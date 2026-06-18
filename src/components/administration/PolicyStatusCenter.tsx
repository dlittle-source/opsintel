import {
  BadgeCheck,
  Scale,
  ShieldAlert,
} from "lucide-react";

import { getEnterpriseConfigurationPolicies } from "@/lib/enterpriseConfigurationPolicyEngine";

export default function PolicyStatusCenter() {
  const policies = getEnterpriseConfigurationPolicies();

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <Scale className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Policy Status Center
        </h2>
      </div>

      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
        Enterprise policy compliance generated from the configuration
        policy engine. This layer prepares the platform for governance,
        licensing, tenant isolation, and future policy enforcement.
      </p>

      <div className="mt-6 space-y-4">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="rounded-lg border bg-background p-4 transition hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">
                  {policy.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Severity: {policy.severity}
                </p>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                {policy.status === "Compliant" ? (
                  <BadgeCheck className="h-3.5 w-3.5" />
                ) : (
                  <ShieldAlert className="h-3.5 w-3.5" />
                )}

                {policy.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}