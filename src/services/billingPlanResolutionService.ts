import { billingPlans } from "@/config/billingPlans";
import { BillingPlan } from "@/types/billingPlan";

export class BillingPlanResolutionService {
  getPlan(plan: BillingPlan) {
    return billingPlans[plan];
  }

  getPriceId(plan: BillingPlan) {
    return billingPlans[plan].priceId;
  }

  getName(plan: BillingPlan) {
    return billingPlans[plan].name;
  }

  getPlans() {
    return Object.entries(billingPlans);
  }
}