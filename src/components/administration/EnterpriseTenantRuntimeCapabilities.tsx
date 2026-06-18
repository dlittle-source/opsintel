import {
  BadgeCheck,
  Layers,
 Lock,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    title: "Feature Resolution",
    description:
      "Runtime feature flags are resolved for the active tenant.",
    icon: Sparkles,
  },
  {
    title: "Capability Engine",
    description:
      "Platform capabilities are evaluated from licensing and policy.",
    icon: Layers,
  },
  {
    title: "License Enforcement",
    description:
      "Commercial entitlements are validated before runtime activation.",
    icon: ShieldCheck,
  },
  {
    title: "Security Policies",
    description:
      "Tenant isolation and policy enforcement are active.",
    icon: Lock,
  },
  {
    title: "Workflow Enablement",
    description:
      "Runtime services expose only authorized functionality.",
    icon: Workflow,
  },
  {
    title: "Enterprise Ready",
    description:
      "Tenant runtime has successfully completed capability resolution.",
    icon: BadgeCheck,
  },
];

export default function EnterpriseTenantRuntimeCapabilities() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Enterprise Runtime Capabilities
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Runtime capability resolution for the active enterprise tenant.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <div
              key={capability.title}
              className="rounded-lg border bg-background p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />

                <span className="font-medium text-sm">
                  {capability.title}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {capability.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}