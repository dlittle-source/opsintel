export type RuntimeDependency = {
  service: string;
  status: "Healthy" | "Watch" | "Degraded";
  dependencies: number;
  description: string;
};

export type RuntimeDependencySnapshot = {
  overallStatus: "Healthy" | "Watch" | "Degraded";
  monitoredServices: number;
  dependencyRelationships: number;
  services: RuntimeDependency[];
};

export function getRuntimeDependencySnapshot(): RuntimeDependencySnapshot {
  const services: RuntimeDependency[] = [
    {
      service: "Runtime Policy Engine",
      status: "Healthy",
      dependencies: 8,
      description:
        "Policy evaluation services operating normally.",
    },
    {
      service: "Tenant Provisioning Layer",
      status: "Healthy",
      dependencies: 6,
      description:
        "Provisioning dependencies resolved successfully.",
    },
    {
      service: "Feature Resolution Service",
      status: "Healthy",
      dependencies: 5,
      description:
        "Feature entitlement relationships remain stable.",
    },
    {
      service: "Runtime Audit Pipeline",
      status: "Watch",
      dependencies: 4,
      description:
        "Audit dependency chain requires monitoring.",
    },
  ];

  return {
    overallStatus: "Healthy",
    monitoredServices: services.length,
    dependencyRelationships: 23,
    services,
  };
}