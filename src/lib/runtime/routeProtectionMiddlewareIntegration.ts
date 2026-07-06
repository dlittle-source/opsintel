import type { RouteProtectionMiddlewareAdapterResult } from "./routeProtectionMiddlewareAdapterResult";

export type RouteProtectionMiddlewareIntegration = {
  pathname: string;
  protected: boolean;
  result: RouteProtectionMiddlewareAdapterResult;
};