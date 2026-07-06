export type RouteProtectionMiddlewareResponse = {
  allowed: boolean;
  redirectTo?: string;
  reason?: string;
};