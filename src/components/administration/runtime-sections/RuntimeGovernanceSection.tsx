import EnterpriseTenantRuntimeCapabilities from "@/components/administration/EnterpriseTenantRuntimeCapabilities";
import EnterpriseTenantRuntimePolicyLayer from "@/components/administration/EnterpriseTenantRuntimePolicyLayer";

export default function RuntimeGovernanceSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Governance
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Enterprise capabilities and policy controls governing tenant
          runtime behavior across the platform.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <EnterpriseTenantRuntimeCapabilities />
        <EnterpriseTenantRuntimePolicyLayer />
      </div>
    </section>
  );
}