import { runtimeFeatureGateFactory } from "./runtimeFeatureGateFactory";
import { runtimeFeatureGateService } from "./runtimeFeatureGateService";
import { RuntimeFeatureGateResult } from "./runtimeFeatureGateResult";

type RuntimeAccessInput = {
  tenantId: string;
  featureKey: string;
  planCode?: string | null;
  subscriptionStatus?: string | null;
  currentUsage?: number;
};

export class RuntimeAccessEvaluator {
  evaluate(
    input: RuntimeAccessInput,
  ): RuntimeFeatureGateResult {
    const policy = runtimeFeatureGateFactory.createPolicy(
      input.featureKey,
    );

    return runtimeFeatureGateService.evaluate(
      {
        tenantId: input.tenantId,
        featureKey: input.featureKey,
        planCode: input.planCode,
        subscriptionStatus: input.subscriptionStatus,
        currentUsage: input.currentUsage,
        usageLimit: policy.usageLimit,
      },
      policy,
    );
  }
}

export const runtimeAccessEvaluator =
  new RuntimeAccessEvaluator();