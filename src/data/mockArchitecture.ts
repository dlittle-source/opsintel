import { GeneratedArchitecture } from "@/types/architecture";

export const mockArchitecture: GeneratedArchitecture = {
  projectName: "AI DevOps Architecture Generator",

  summary:
    "Production-ready architecture using Next.js, Node.js, Docker, GitHub Actions, and AWS.",

  stack: [
    "Next.js",
    "Node.js",
    "Docker",
    "AWS EC2",
    "Nginx",
    "GitHub Actions",
  ],

  nodes: [
    {
      id: "frontend",
      label: "Next.js Frontend",
      type: "frontend",
      provider: "Vercel",
      description: "Frontend application layer",
    },

    {
      id: "backend",
      label: "Node.js API",
      type: "backend",
      provider: "AWS EC2",
      description: "Backend API service",
    },

    {
      id: "docker",
      label: "Docker",
      type: "container",
      provider: "Docker",
      description: "Containerized deployment",
    },

    {
      id: "cicd",
      label: "GitHub Actions",
      type: "cicd",
      provider: "GitHub",
      description: "CI/CD deployment pipeline",
    },

    {
      id: "nginx",
      label: "Nginx",
      type: "cloud",
      provider: "AWS",
      description: "Reverse proxy",
    },
  ],

  connections: [
    {
      id: "e1",
      source: "frontend",
      target: "backend",
      label: "API Calls",
    },

    {
      id: "e2",
      source: "backend",
      target: "docker",
      label: "Containerized",
    },

    {
      id: "e3",
      source: "cicd",
      target: "backend",
      label: "Deploy",
    },

    {
      id: "e4",
      source: "nginx",
      target: "backend",
      label: "Proxy Traffic",
    },
  ],

  deploymentFlow: [
    "Developer pushes code to GitHub",
    "GitHub Actions pipeline triggers",
    "Docker image builds",
    "Application deploys to AWS EC2",
    "Nginx routes production traffic",
  ],

  securityRecommendations: [
    "Enable HTTPS",
    "Use environment variables",
    "Implement rate limiting",
  ],

  scalabilityRecommendations: [
    "Add load balancing",
    "Implement container orchestration",
    "Use CDN caching",
  ],

  estimatedMonthlyCost: "$180 - $350/month",

  riskLevel: "Medium",

  deploymentConfidence: 92,

  infrastructureSummary:
    "Production-ready AWS deployment architecture optimized for scalability, CI/CD automation, containerized deployment, and observability.",

  estimatedComplexity: "Medium",

  productionReadinessScore: 87,
};