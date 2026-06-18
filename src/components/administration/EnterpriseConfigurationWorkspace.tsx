import ConfigurationAuditTimeline from "@/components/administration/ConfigurationAuditTimeline";
import ConfigurationDependencyGraph from "@/components/administration/ConfigurationDependencyGraph";
import ConfigurationHealthDashboard from "@/components/administration/ConfigurationHealthDashboard";
import ConfigurationTimeline from "@/components/administration/ConfigurationTimeline";
import EnterpriseConfigurationRegistry from "@/components/administration/EnterpriseConfigurationRegistry";
import EnterpriseConfigurationWorkspaceHeader from "@/components/administration/EnterpriseConfigurationWorkspaceHeader";
import EnterpriseConfigurationWorkspaceSummary from "@/components/administration/EnterpriseConfigurationWorkspaceSummary";
import EnterpriseValidationCenter from "@/components/administration/EnterpriseValidationCenter";
import PolicyStatusCenter from "@/components/administration/PolicyStatusCenter";
import RuntimeStatusCenter from "@/components/administration/RuntimeStatusCenter";

export default function EnterpriseConfigurationWorkspace() {
  return (
    <div className="space-y-6">
      <EnterpriseConfigurationWorkspaceHeader />

      <EnterpriseConfigurationWorkspaceSummary />

      <RuntimeStatusCenter />

      <EnterpriseConfigurationRegistry />

      <ConfigurationHealthDashboard />

      <div className="grid gap-6 xl:grid-cols-2">
        <ConfigurationDependencyGraph />
        <ConfigurationTimeline />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ConfigurationAuditTimeline />
        <PolicyStatusCenter />
      </div>

      <EnterpriseValidationCenter />
    </div>
  );
}