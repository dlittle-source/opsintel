import EnterpriseTenantRuntimeActivationLayer from "@/components/administration/EnterpriseTenantRuntimeActivationLayer";

export default function RuntimeActivationSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Activation
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Runtime activation coordinates the transition from provisioned
          resources to active enterprise services while validating
          readiness, dependencies, and tenant-specific execution policies.
        </p>
      </div>

      <EnterpriseTenantRuntimeActivationLayer />
    </section>
  );
}