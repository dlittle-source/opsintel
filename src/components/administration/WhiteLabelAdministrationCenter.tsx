import AdministrationHeader from "@/components/administration/AdministrationHeader";
import AdministrationModulesGrid from "@/components/administration/AdministrationModulesGrid";
import AdministrationReadinessDashboard from "@/components/administration/AdministrationReadinessDashboard";
import AdministrationSummaryCards from "@/components/administration/AdministrationSummaryCards";
import EnterpriseConfigurationWorkspace from "@/components/administration/EnterpriseConfigurationWorkspace";

import ColorPalettePanel from "@/components/administration/panels/ColorPalettePanel";
import CompanyProfilePanel from "@/components/administration/panels/CompanyProfilePanel";
import DevelopmentRulesPanel from "@/components/administration/panels/DevelopmentRulesPanel";
import LogoManagementPanel from "@/components/administration/panels/LogoManagementPanel";
import PlatformIdentityPanel from "@/components/administration/panels/PlatformIdentityPanel";
import ThemeConfigurationPanel from "@/components/administration/panels/ThemeConfigurationPanel";

export default function WhiteLabelAdministrationCenter() {
  return (
    <div className="space-y-6">
      <AdministrationHeader />

      <AdministrationSummaryCards />

      <AdministrationReadinessDashboard />

      <AdministrationModulesGrid />

      <EnterpriseConfigurationWorkspace />

      <section className="grid gap-6 xl:grid-cols-2">
        <CompanyProfilePanel />
        <PlatformIdentityPanel />
        <LogoManagementPanel />
        <ThemeConfigurationPanel />
        <ColorPalettePanel />
        <DevelopmentRulesPanel />
      </section>
    </div>
  );
}