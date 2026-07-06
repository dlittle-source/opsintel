import type { RouteProtectionMiddlewareResponse } from "./routeProtectionMiddlewareResponse";

export type RouteProtectionExecution = {
  pathname: string;
  response: RouteProtectionMiddlewareResponse;
};