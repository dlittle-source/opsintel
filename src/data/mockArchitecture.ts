import { GeneratedArchitecture } from "@/types/architecture";

export const mockArchitecture: GeneratedArchitecture = {
  projectName: "OpsIntel",

  summary:
    "AI-powered executive infrastructure intelligence platform delivering operational visibility, governance insights, deployment intelligence, commercialization readiness, and executive decision support.",

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
      label: "OpsIntel Executive Portal",
      type: "frontend",
      provider: "Next.js",
      description:
        "Executive intelligence and infrastructure visibility interface",
    },

    {
      id: "backend",
      label: "OpsIntel Intelligence API",
      type: "backend",
      provider: "AWS EC2",
      description:
        "Executive intelligence, readiness scoring, and advisory services",
    },

    {
      id: "docker",
      label: "Container Platform",
      type: "container",
      provider: "Docker",
      description: "Containerized platform deployment",
    },

    {
      id: "cicd",
      label: "Deployment Automation",
      type: "cicd",
      provider: "GitHub Actions",
      description: "CI/CD automation and release orchestration",
    },

    {
      id: "nginx",
      label: "Traffic Gateway",
      type: "cloud",
      provider: "AWS",
      description: "Reverse proxy and traffic management",
    },
  ],

  connections: [
    {
      id: "e1",
      source: "frontend",
      target: "backend",
      label: "Executive Intelligence Requests",
    },

    {
      id: "e2",
      source: "backend",
      target: "docker",
      label: "Container Services",
    },

    {
      id: "e3",
      source: "cicd",
      target: "backend",
      label: "Automated Deployment",
    },

    {
      id: "e4",
      source: "nginx",
      target: "backend",
      label: "Executive Traffic Routing",
    },
  ],

  deploymentFlow: [
    "Development updates are committed to GitHub",
    "GitHub Actions executes validation and deployment workflows",
    "Container images are built and validated",
    "OpsIntel services deploy to AWS infrastructure",
    "Traffic gateway routes executive platform requests",
  ],

  securityRecommendations: [
    "Enable HTTPS and certificate automation",
    "Use environment-based secret management",
    "Implement API rate limiting and monitoring",
  ],

  scalabilityRecommendations: [
    "Add load balancing across services",
    "Implement container orchestration",
    "Introduce CDN and edge caching",
  ],

  estimatedMonthlyCost: "$180 - $350/month",

  riskLevel: "Medium",

  deploymentConfidence: 92,

  infrastructureSummary:
    "Production-ready executive infrastructure intelligence platform optimized for scalability, automation, governance visibility, operational intelligence, and SaaS commercialization.",

  estimatedComplexity: "Medium",

  productionReadinessScore: 87,
};