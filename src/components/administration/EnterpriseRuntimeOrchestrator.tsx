import RuntimeActivationSection from "@/components/administration/runtime-sections/RuntimeActivationSection";
import RuntimeDecisionSection from "@/components/administration/runtime-sections/RuntimeDecisionSection";
import RuntimeGovernanceSection from "@/components/administration/runtime-sections/RuntimeGovernanceSection";
import RuntimeOperationsSection from "@/components/administration/runtime-sections/RuntimeOperationsSection";
import RuntimeOverviewSection from "@/components/administration/runtime-sections/RuntimeOverviewSection";
import RuntimeProvisioningSection from "@/components/administration/runtime-sections/RuntimeProvisioningSection";

export default function EnterpriseRuntimeOrchestrator() {
  return (
    <div className="grid gap-8">
      <RuntimeOverviewSection />

      <RuntimeGovernanceSection />

      <RuntimeDecisionSection />

      <RuntimeProvisioningSection />

      <RuntimeActivationSection />

      <RuntimeOperationsSection />
    </div>
  );
}