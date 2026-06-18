import { getEnterpriseRegistrySnapshot } from "@/lib/enterpriseConfigurationRegistryAdapter";

export interface EnterpriseValidationResult {
  overallStatus: "Passed" | "Warning";
  healthyModules: number;
  warningModules: number;
  totalModules: number;
}

export function getEnterpriseValidationResult(): EnterpriseValidationResult {
  const registry = getEnterpriseRegistrySnapshot();

  const healthyModules = registry.modules.filter(
    (module) => module.status === "Healthy"
  ).length;

  const warningModules = registry.modules.filter(
    (module) => module.status === "Warning"
  ).length;

  return {
    overallStatus:
      warningModules === 0 ? "Passed" : "Warning",

    healthyModules,

    warningModules,

    totalModules: registry.modules.length,
  };
}