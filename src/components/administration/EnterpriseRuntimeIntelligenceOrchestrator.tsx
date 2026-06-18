import RuntimeComplianceSection from "@/components/administration/runtime-intelligence/RuntimeComplianceSection";
import RuntimeDependencySection from "@/components/administration/runtime-intelligence/RuntimeDependencySection";
import RuntimeExecutiveSummary from "@/components/administration/runtime-intelligence/RuntimeExecutiveSummary";
import RuntimeHealthSection from "@/components/administration/runtime-intelligence/RuntimeHealthSection";
import RuntimeOptimizationSection from "@/components/administration/runtime-intelligence/RuntimeOptimizationSection";
import RuntimeRiskAssessmentSection from "@/components/administration/runtime-intelligence/RuntimeRiskAssessmentSection";
import RuntimeTelemetrySection from "@/components/administration/runtime-intelligence/RuntimeTelemetrySection";

export default function EnterpriseRuntimeIntelligenceOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeExecutiveSummary />

      <div className="grid gap-6 xl:grid-cols-2">
        <RuntimeHealthSection />
        <RuntimeTelemetrySection />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RuntimeComplianceSection />
        <RuntimeDependencySection />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RuntimeOptimizationSection />
        <RuntimeRiskAssessmentSection />
      </div>
    </section>
  );
}