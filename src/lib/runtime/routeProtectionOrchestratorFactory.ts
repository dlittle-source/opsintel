import type { RouteProtectionOrchestrator } from "./routeProtectionOrchestrator";

export function createRouteProtectionOrchestrator(): RouteProtectionOrchestrator {
  return {
    protectRoute() {
      throw new Error("RouteProtectionOrchestrator not implemented.");
    },
  };
}