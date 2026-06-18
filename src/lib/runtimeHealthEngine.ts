export type RuntimeHealthSummary = {
  overallHealth: string;
  serviceAvailability: string;
  activeIncidents: number;
  operationalReadiness: string;
};

export function getRuntimeHealthSummary(): RuntimeHealthSummary {
  return {
    overallHealth: "Healthy",
    serviceAvailability: "99.98%",
    activeIncidents: 0,
    operationalReadiness: "Ready",
  };
}