import EnterpriseTenantRuntimeDecisionEngine from "@/components/administration/EnterpriseTenantRuntimeDecisionEngine";

export default function RuntimeDecisionSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Decision Engine
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Intelligent orchestration logic evaluates enterprise policies,
          tenant capabilities, and runtime state to determine execution
          decisions across the platform.
        </p>
      </div>

      <EnterpriseTenantRuntimeDecisionEngine />
    </section>
  );
}