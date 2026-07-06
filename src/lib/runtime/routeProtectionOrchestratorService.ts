import { RouteProtectionDecisionService } from "./routeProtectionDecisionService";
import { createRouteProtectionResult } from "./routeProtectionResultFactory";
import type { RouteProtectionResult } from "./routeProtectionResult";
import type { RouteProtectionDecisionInput } from "./routeProtectionDecision";

export class RouteProtectionOrchestratorService {
  constructor(
    private readonly decisionService = new RouteProtectionDecisionService()
  ) {}

  protectRoute(
    input: RouteProtectionDecisionInput
  ): RouteProtectionResult {
    const decision = this.decisionService.decide(input);

    return createRouteProtectionResult(decision);
  }
}