import {
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

const activationSteps = [
  {
    title: "Runtime Initialization",
    description:
      "The enterprise tenant runtime is initialized using the resolved configuration profile.",
    icon: Cpu,
  },
  {
    title: "Capability Loading",
    description:
      "Licensed capabilities and feature flags are loaded into the active runtime.",
    icon: BrainCircuit,
  },
  {
    title: "Policy Enforcement",
    description:
      "Enterprise governance and security policies are applied before activation.",
    icon: ShieldCheck,
  },
  {
    title: "Service Activation",
    description:
      "Authorized platform services are enabled for the tenant environment.",
    icon: Zap,
  },
  {
    title: "Health Verification",
    description:
      "Runtime health checks validate that all required services are operational.",
    icon: CheckCircle2,
  },
  {
    title: "Tenant Ready",
    description:
      "The tenant runtime has successfully completed activation and is ready for enterprise workloads.",
    icon: BadgeCheck,
  },
];

export default function EnterpriseTenantRuntimeActivationLayer() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Enterprise Tenant Runtime Activation Layer
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Runtime activation orchestrates capability loading, policy
          enforcement, service initialization, and readiness validation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {activationSteps.map((step) => {
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