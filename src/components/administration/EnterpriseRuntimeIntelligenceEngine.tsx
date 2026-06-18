import EnterpriseRuntimeIntelligenceDashboard from "@/components/administration/EnterpriseRuntimeIntelligenceDashboard";
import EnterpriseRuntimeIntelligenceOrchestrator from "@/components/administration/EnterpriseRuntimeIntelligenceOrchestrator";

export default function EnterpriseRuntimeIntelligenceEngine() {
  return (
    <section className="space-y-6">
      <EnterpriseRuntimeIntelligenceDashboard />

      <EnterpriseRuntimeIntelligenceOrchestrator />
    </section>
  );
}