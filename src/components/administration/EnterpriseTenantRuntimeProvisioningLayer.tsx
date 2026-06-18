import {
  BadgeCheck,
  Building2,
  Database,
  KeyRound,
  Settings2,
  UserCog,
} from "lucide-react";

const provisioningSteps = [
  {
    title: "Tenant Registration",
    description:
      "A new organization is registered and assigned a unique tenant identity.",
    icon: Building2,
  },
  {
    title: "Configuration Profile",
    description:
      "Runtime configuration and default platform settings are initialized.",
    icon: Settings2,
  },
  {
    title: "License Assignment",
    description:
      "Commercial licensing and subscription entitlements are applied.",
    icon: BadgeCheck,
  },
  {
    title: "Capability Provisioning",
    description:
      "Authorized platform capabilities are enabled for the tenant.",
    icon: UserCog,
  },
  {
    title: "Runtime Resources",
    description:
      "Tenant-specific runtime resources and services are allocated.",
    icon: Database,
  },
  {
    title: "Activation",
    description:
      "The tenant is validated and activated for enterprise operations.",
    icon: KeyRound,
  },
];

export default function EnterpriseTenantRuntimeProvisioningLayer() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Enterprise Tenant Runtime Provisioning Layer
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Provisioning workflow for initializing, configuring, licensing,
          and activating enterprise tenants.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {provisioningSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="rounded-lg border bg-background p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />

                <span className="text-sm font-medium">
                  {step.title}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}