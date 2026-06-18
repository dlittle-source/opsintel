import {
  getActiveWhiteLabelProfile,
  type WhiteLabelProfile,
} from "@/lib/whiteLabelProfiles";

export type WhiteLabelLicensingTier =
  | "starter"
  | "professional"
  | "enterprise"
  | "white-label";

export type WhiteLabelConfiguration = WhiteLabelProfile & {
  footerText: string;
};

export function getWhiteLabelConfiguration(): WhiteLabelConfiguration {
  const profile = getActiveWhiteLabelProfile();

  return {
    ...profile,

    footerText: `© ${new Date().getFullYear()} ${
      profile.companyName
    }. Executive infrastructure intelligence platform.`,
  };
}