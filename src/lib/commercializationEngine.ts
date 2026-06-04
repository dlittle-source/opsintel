export type CommercializationChannel =
  | "selfServeSaaS"
  | "enterpriseSales"
  | "whiteLabel"
  | "consulting"
  | "apiLicensing";

export type CommercializationReadiness = {
  channel: CommercializationChannel;
  label: string;
  description: string;
  ready: boolean;
};

export const commercializationReadiness: CommercializationReadiness[] = [
  {
    channel: "selfServeSaaS",
    label: "Self-Serve SaaS",
    description: "Subscription plans, usage limits, and upgrade paths are defined.",
    ready: true,
  },
  {
    channel: "enterpriseSales",
    label: "Enterprise Sales",
    description: "Executive intelligence and workspace readiness support enterprise buyers.",
    ready: true,
  },
  {
    channel: "whiteLabel",
    label: "White-Label Licensing",
    description: "Tenant branding and enterprise packaging foundation is available.",
    ready: true,
  },
  {
    channel: "consulting",
    label: "DevOps Consulting",
    description: "Architecture reviews, deployment analysis, and compliance guidance support services.",
    ready: true,
  },
  {
    channel: "apiLicensing",
    label: "API Licensing",
    description: "API access is modeled for business and enterprise plans.",
    ready: true,
  },
];

export function getCommercializationReadiness() {
  return commercializationReadiness;
}

export function getReadyCommercializationChannels() {
  return commercializationReadiness.filter((channel) => channel.ready);
}

export function getCommercializationScore() {
  const readyChannels = getReadyCommercializationChannels().length;

  return Math.round(
    (readyChannels / commercializationReadiness.length) * 100,
  );
}

export function getPrimaryValueProposition() {
  return "AI-powered DevOps architecture intelligence platform for cloud teams, consultants, and enterprise buyers.";
}