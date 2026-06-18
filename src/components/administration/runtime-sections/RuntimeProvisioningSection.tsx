import EnterpriseTenantRuntimeProvisioningLayer from "@/components/administration/EnterpriseTenantRuntimeProvisioningLayer";

export default function RuntimeProvisioningSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Provisioning
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Provisioning services prepare and configure enterprise runtime
          resources based on tenant configuration, governance policies,
          and orchestration decisions.
        </p>
      </div>

      <EnterpriseTenantRuntimeProvisioningLayer />
    </section>
  );
}