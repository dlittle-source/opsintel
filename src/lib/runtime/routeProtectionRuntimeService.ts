import type { RouteProtectionFinalResult } from "./routeProtectionFinalResult";
import type { RouteProtectionRuntime } from "./routeProtectionRuntime";
import { createRouteProtectionRuntime } from "./routeProtectionRuntimeFactory";

export class RouteProtectionRuntimeService {
  run(
    pathname: string,
    result: RouteProtectionFinalResult
  ): RouteProtectionRuntime {
    return createRouteProtectionRuntime(
      pathname,
      result
    );
  }
}