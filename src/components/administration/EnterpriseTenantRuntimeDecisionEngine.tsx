import {
  BrainCircuit,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const decisions = [
  {
    title: "License Evaluation",
    description:
      "Commercial licensing is evaluated before runtime services are enabled.",
    icon: ShieldCheck,
  },
  {
    title: "Feature Resolution",
    description:
      "Tenant feature flags determine which capabilities become available.",
    icon: Sparkles,
  },
  {
    title: "Capability Selection",
    description:
      "Resolved capabilities are assembled into the active runtime profile.",
    icon: BrainCircuit,
  },
  {
    title: "Policy Validation",
    description:
      "Enterprise policies are validated before execution is permitted.",
    icon: CheckCircle2,
  },
  {
    title: "Execution Routing",
    description:
      "Runtime decisions determine which workflows and services are activated.",
    icon: Workflow,
  },
  {
    title: "Decision State",
    description:
      "Runtime decision engine successfully resolved the active tenant configuration.",
    icon: GitBranch,
  },
];

export default function EnterpriseTenantRuntimeDecisionEngine() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Enterprise Tenant Runtime Decision Engine
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Decision orchestration that combines licensing, feature flags,
          capabilities, and policy evaluation into the active tenant runtime.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {decisions.map((decision) => {
          const Icon = decision.icon;

          return (
            <div
              key={decision.title}
              className="rounded-lg border bg-background p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />

                <span className="text-sm font-medium">
                  {decision.title}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {decision.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}