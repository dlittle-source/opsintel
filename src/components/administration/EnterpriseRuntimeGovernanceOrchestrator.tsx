import RuntimeAccessGovernance from "@/components/administration/runtime-governance/RuntimeAccessGovernance";
import RuntimeAuditGovernance from "@/components/administration/runtime-governance/RuntimeAuditGovernance";
import RuntimeChangeControl from "@/components/administration/runtime-governance/RuntimeChangeControl";
import RuntimeExceptionCenter from "@/components/administration/runtime-governance/RuntimeExceptionCenter";
import RuntimeGovernanceExecutiveSummary from "@/components/administration/runtime-governance/RuntimeGovernanceExecutiveSummary";
import RuntimeGovernanceOverview from "@/components/administration/runtime-governance/RuntimeGovernanceOverview";
import RuntimePolicyGovernance from "@/components/administration/runtime-governance/RuntimePolicyGovernance";

export default function EnterpriseRuntimeGovernanceOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeGovernanceExecutiveSummary />

      <div className="grid gap-6 xl:grid-cols-2">
        <RuntimeGovernanceOverview />
        <RuntimePolicyGovernance />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RuntimeAccessGovernance />
        <RuntimeChangeControl />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RuntimeAuditGovernance />
        <RuntimeExceptionCenter />
      </div>
    </section>
  );
}