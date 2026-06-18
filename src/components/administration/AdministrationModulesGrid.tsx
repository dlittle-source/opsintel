import EnterpriseRuntimeIntelligenceWorkspace from "@/components/administration/EnterpriseRuntimeIntelligenceWorkspace";
import EnterpriseRuntimeOrchestrator from "@/components/administration/EnterpriseRuntimeOrchestrator";

export default function AdministrationModulesGrid() {
  return (
    <section className="grid gap-6">
      <EnterpriseRuntimeOrchestrator />

      <EnterpriseRuntimeIntelligenceWorkspace />
    </section>
  );
}