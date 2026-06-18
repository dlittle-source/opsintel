export interface RuntimeConfigurationStatus {
  id: string;
  name: string;
  status: "Healthy" | "Warning" | "Pending";
  category: string;
}

export interface EnterpriseConfigurationRuntime {
  runtimeState: "Operational";
  validationState: "Passed";
  whiteLabelState: "Enabled";
  synchronizationState: "Synchronized";
  modules: RuntimeConfigurationStatus[];
}

export function getEnterpriseConfigurationRuntime(): EnterpriseConfigurationRuntime {
  return {
    runtimeState: "Operational",

    validationState: "Passed",

    whiteLabelState: "Enabled",

    synchronizationState: "Synchronized",

    modules: [
      {
        id: "company-profile",
        name: "Company Profile",
        status: "Healthy",
        category: "Organization",
      },
      {
        id: "platform-identity",
        name: "Platform Identity",
        status: "Healthy",
        category: "Branding",
      },
      {
        id: "logo-management",
        name: "Logo Management",
        status: "Healthy",
        category: "Assets",
      },
      {
        id: "theme-configuration",
        name: "Theme Configuration",
        status: "Healthy",
        category: "Presentation",
      },
      {
        id: "color-palette",
        name: "Color Palette",
        status: "Healthy",
        category: "Presentation",
      },
      {
        id: "development-rules",
        name: "Development Rules",
        status: "Healthy",
        category: "Governance",
      },
    ],
  };
}