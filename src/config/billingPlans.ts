export const billingPlans = {
  starter: {
    name: "Starter",
    priceId: process.env.STRIPE_STARTER_PRICE_ID!,
  },

  professional: {
    name: "Professional",
    priceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID!,
  },

  enterprise: {
    name: "Enterprise",
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID!,
  },

  whiteLabel: {
    name: "White Label",
    priceId: process.env.STRIPE_WHITE_LABEL_PRICE_ID!,
  },
} as const;