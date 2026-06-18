import AdministrationRuntimeOverview from "@/components/administration/AdministrationRuntimeOverview";
import EnterpriseRuntimeSnapshot from "@/components/administration/EnterpriseRuntimeSnapshot";
import EnterpriseTenantRuntimeSummary from "@/components/administration/EnterpriseTenantRuntimeSummary";

export default function RuntimeOverviewSection() {
  return (
    <section className="space-y-6">
      <AdministrationRuntimeOverview />

      <div className="grid gap-6 xl:grid-cols-2">
        <EnterpriseRuntimeSnapshot />
        <EnterpriseTenantRuntimeSummary />
      </div>
    </section>
  );
}