export function buildArchitecturePrompt(userPrompt: string) {
  return `
You are an expert AI DevOps Architect.

Generate a production-ready cloud architecture based on this request:

"${userPrompt}"

Return ONLY valid JSON using this exact shape:

{
  "projectName": "string",
  "summary": "string",
  "stack": ["string"],
  "nodes": [
    {
      "id": "string",
      "label": "string",
      "type": "frontend | backend | database | cloud | container | cicd | security | monitoring",
      "provider": "string",
      "description": "string"
    }
  ],
  "connections": [
    {
      "id": "string",
      "source": "string",
      "target": "string",
      "label": "string"
    }
  ],
  "deploymentFlow": ["string"],
  "securityRecommendations": ["string"],
  "scalabilityRecommendations": ["string"],
  "estimatedMonthlyCost": "string",
  "riskLevel": "Low | Medium | High",
  "deploymentConfidence": 0,
  "infrastructureSummary": "string",
  "estimatedComplexity": "Low | Medium | High",
  "productionReadinessScore": 0
}

Rules:
- Use short unique lowercase ids.
- Every connection source and target must match an existing node id.
- Include 5 to 9 nodes.
- Include frontend, backend, CI/CD, container, and cloud infrastructure when relevant.
- estimatedMonthlyCost should be a realistic monthly range such as "$80 - $250/month".
- riskLevel must be Low, Medium, or High.
- deploymentConfidence must be between 1 and 100.
- infrastructureSummary should explain the operational value of the architecture in 1 to 2 sentences.
- productionReadinessScore must be between 1 and 100.
- Do not include markdown.
- Do not include explanations outside JSON.
`;
}