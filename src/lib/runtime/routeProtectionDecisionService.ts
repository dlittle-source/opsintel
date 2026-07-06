import type {
  RouteProtectionDecision,
  RouteProtectionDecisionInput,
} from "./routeProtectionDecision";

export class RouteProtectionDecisionService {
  decide(
    input: RouteProtectionDecisionInput
  ): RouteProtectionDecision {
    if (!input.isAuthenticated) {
      return {
        allowed: false,
        reason: "UNAUTHENTICATED",
        redirectTo: "/sign-in",
      };
    }

    if (!input.workspaceResolved) {
      return {
        allowed: false,
        reason: "WORKSPACE_NOT_FOUND",
        redirectTo: "/dashboard",
      };
    }

    if (!input.hasWorkspaceAccess) {
      return {
        allowed: false,
        reason: "WORKSPACE_ACCESS_DENIED",
        redirectTo: "/dashboard",
      };
    }

    return {
      allowed: true,
      reason: "ACCESS_GRANTED",
    };
  }
}