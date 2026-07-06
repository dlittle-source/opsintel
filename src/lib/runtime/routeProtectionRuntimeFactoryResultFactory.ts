import type { RouteProtectionRuntime } from "./routeProtectionRuntime";
import type { RouteProtectionRuntimeFactoryResult } from "./routeProtectionRuntimeFactoryResult";

export function createRouteProtectionRuntimeFactoryResult(
  runtime: RouteProtectionRuntime
): RouteProtectionRuntimeFactoryResult {
  return {
    runtime,
  };
}