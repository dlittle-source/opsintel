import { WorkspaceGuardDecision } from "./workspaceGuardDecision";

export interface WorkspaceGuardDecisionResult {
  decision: WorkspaceGuardDecision;
  allowed: boolean;
  message: string;
  actionLabel?: string;
  actionHref?: string;
}