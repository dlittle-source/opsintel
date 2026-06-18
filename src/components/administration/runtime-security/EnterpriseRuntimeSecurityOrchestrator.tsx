import RuntimeIdentityProtection from "@/components/administration/runtime-security/RuntimeIdentityProtection";
import RuntimeIncidentDefense from "@/components/administration/runtime-security/RuntimeIncidentDefense";
import RuntimePolicyEnforcement from "@/components/administration/runtime-security/RuntimePolicyEnforcement";
import RuntimeSecurityExecutiveSummary from "@/components/administration/runtime-security/RuntimeSecurityExecutiveSummary";
import RuntimeSecurityInsights from "@/components/administration/runtime-security/RuntimeSecurityInsights";
import RuntimeSecurityOverview from "@/components/administration/runtime-security/RuntimeSecurityOverview";
import RuntimeThreatDetection from "@/components/administration/runtime-security/RuntimeThreatDetection";
import RuntimeVulnerabilityCenter from "@/components/administration/runtime-security/RuntimeVulnerabilityCenter";

export default function EnterpriseRuntimeSecurityOrchestrator() {
  return (
    <section className="space-y-6">
      <RuntimeSecurityExecutiveSummary />

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeSecurityOverview />
        <RuntimeThreatDetection />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimeVulnerabilityCenter />
        <RuntimeIdentityProtection />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-2">
        <RuntimePolicyEnforcement />
        <RuntimeIncidentDefense />
      </div>

      <RuntimeSecurityInsights />
    </section>
  );
}