import type { RouteProtectionExecution } from "./routeProtectionExecution";
import type { RouteProtectionFinalResult } from "./routeProtectionFinalResult";
import { createRouteProtectionFinalResult } from "./routeProtectionFinalResultFactory";

export class RouteProtectionFinalResultService {
  finalize(
    execution: RouteProtectionExecution
  ): RouteProtectionFinalResult {
    return createRouteProtectionFinalResult(execution);
  }
}