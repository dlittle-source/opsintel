export type OnboardingStep = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type OnboardingProgress = {
  totalSteps: number;
  completedSteps: number;
  percentage: number;
};

export const defaultOnboardingSteps: OnboardingStep[] = [
  {
    id: "account",
    title: "Create Account",
    description:
      "Account and organization configured.",
    completed: true,
  },
  {
    id: "workspace",
    title: "Configure Workspace",
    description:
      "Initialize executive workspace settings.",
    completed: false,
  },
  {
    id: "architecture",
    title: "Generate Architecture",
    description:
      "Create your first architecture blueprint.",
    completed: false,
  },
  {
    id: "intelligence",
    title: "Review Intelligence",
    description:
      "Explore platform intelligence insights.",
    completed: false,
  },
  {
    id: "deployments",
    title: "Analyze Deployment",
    description:
      "Run deployment readiness analysis.",
    completed: false,
  },
];

export function getOnboardingProgress(
  steps: OnboardingStep[],
): OnboardingProgress {
  const completedSteps = steps.filter(
    (step) => step.completed,
  ).length;

  const totalSteps = steps.length;

  return {
    totalSteps,
    completedSteps,
    percentage: Math.round(
      (completedSteps / totalSteps) * 100,
    ),
  };
}

export function isOnboardingComplete(
  steps: OnboardingStep[],
) {
  return steps.every(
    (step) => step.completed,
  );
}