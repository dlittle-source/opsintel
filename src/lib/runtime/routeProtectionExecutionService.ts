import type { RouteProtectionExecution } from "./routeProtectionExecution";
import type { RouteProtectionMiddlewareResponse } from "./routeProtectionMiddlewareResponse";
import { createRouteProtectionExecution } from "./routeProtectionExecutionFactory";

export class RouteProtectionExecutionService {
  execute(
    pathname: string,
    response: RouteProtectionMiddlewareResponse
  ): RouteProtectionExecution {
    return createRouteProtectionExecution(
      pathname,
      response
    );
  }
}