import type { RouteProtectionDecisionInput } from "./routeProtectionDecision";
import type { RouteProtectionResult } from "./routeProtectionResult";
import { RouteProtectionOrchestratorService } from "./routeProtectionOrchestratorService";

export class RouteProtectionMiddlewareService {
  constructor(
    private readonly orchestrator =
      new RouteProtectionOrchestratorService()
  ) {}

  protect(
    input: RouteProtectionDecisionInput
  ): RouteProtectionResult {
    return this.orchestrator.protectRoute(input);
  }
}