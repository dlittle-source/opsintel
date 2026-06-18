export interface EnterpriseMetadata {
  platformName: string;
  edition: string;
  version: string;
  environment: string;
  deploymentMode: string;
}

export function getEnterpriseMetadata(): EnterpriseMetadata {
  return {
    platformName: "OpsIntel",
    edition: "Enterprise",
    version: "1.0.0",
    environment: "Production",
    deploymentMode: "White-Label Multi-Tenant",
  };
}