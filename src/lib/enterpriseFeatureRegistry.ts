export interface EnterpriseFeatureRegistry {
  administration: boolean;
  whiteLabel: boolean;
  branding: boolean;
  logoManagement: boolean;
  themeConfiguration: boolean;
  colorPalette: boolean;
  developmentRules: boolean;
  multiTenant: boolean;
}

export function getEnterpriseFeatureRegistry(): EnterpriseFeatureRegistry {
  return {
    administration: true,
    whiteLabel: true,
    branding: true,
    logoManagement: true,
    themeConfiguration: true,
    colorPalette: true,
    developmentRules: true,
    multiTenant: true,
  };
}