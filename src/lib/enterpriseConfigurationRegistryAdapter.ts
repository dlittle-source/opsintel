import {
  getEnterpriseConfigurationRuntime,
} from "@/lib/enterpriseConfigurationRuntimeEngine";

export interface EnterpriseRegistryModule {
  id: string;
  name: string;
  status: string;
  category: string;
}

export interface EnterpriseRegistrySnapshot {
  runtimeState: string;
  validationState: string;
  whiteLabelState: string;
  synchronizationState: string;
  modules: EnterpriseRegistryModule[];
}

export function getEnterpriseRegistrySnapshot(): EnterpriseRegistrySnapshot {
  const runtime = getEnterpriseConfigurationRuntime();

  return {
    runtimeState:
      runtime.runtimeState ?? "Operational",

    validationState:
      runtime.validationState ?? "Unknown",

    whiteLabelState:
      runtime.whiteLabelState ?? "Disabled",

    synchronizationState:
      runtime.synchronizationState ?? "Unknown",

    modules:
      runtime.modules?.map((module) => ({
        id: module.id,
        name: module.name,
        status: module.status,
        category: module.category,
      })) ?? [],
  };
}