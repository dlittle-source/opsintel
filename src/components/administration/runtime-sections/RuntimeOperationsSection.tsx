import EnterpriseTenantRuntimeOperations from "@/components/administration/EnterpriseTenantRuntimeOperations";

export default function RuntimeOperationsSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Operations
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Operational services monitor, coordinate, and maintain the
          enterprise runtime environment, providing continuous visibility
          into execution state, health, and lifecycle management across
          all tenants.
        </p>
      </div>

      <EnterpriseTenantRuntimeOperations />
    </section>
  );
}