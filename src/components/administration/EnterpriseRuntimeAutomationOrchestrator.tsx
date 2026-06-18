import RuntimeApprovalAutomation from "@/components/administration/runtime-automation/RuntimeApprovalAutomation";
import RuntimeAutomationExecutiveSummary from "@/components/administration/runtime-automation/RuntimeAutomationExecutiveSummary";
import RuntimeAutomationInsights from "@/components/administration/runtime-automation/RuntimeAutomationInsights";
import RuntimeAutomationOverview from "@/components/administration/runtime-automation/RuntimeAutomationOverview";
import RuntimeEscalationCenter from "@/components/administration/runtime-automation/RuntimeEscalationCenter";
import RuntimeRemediationAutomation from "@/components/administration/runtime-automation/RuntimeRemediationAutomation";
import RuntimeSchedulingCenter from "@/components/administration/runtime-automation/RuntimeSchedulingCenter";
import RuntimeWorkflowAutomation from "@/components/administration/runtime-automation/RuntimeWorkflowAutomation";

export default function EnterpriseRuntimeAutomationOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeAutomationExecutiveSummary />

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeAutomationOverview />
        <RuntimeWorkflowAutomation />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeRemediationAutomation />
        <RuntimeSchedulingCenter />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeApprovalAutomation />
        <RuntimeEscalationCenter />
      </div>

      <RuntimeAutomationInsights />
    </section>
  );
}