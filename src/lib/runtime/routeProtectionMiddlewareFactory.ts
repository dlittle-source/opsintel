import type { RouteProtectionMiddleware } from "./routeProtectionMiddleware";

export function createRouteProtectionMiddleware(): RouteProtectionMiddleware {
  return {
    protect() {
      throw new Error("RouteProtectionMiddleware not implemented.");
    },
  };
}