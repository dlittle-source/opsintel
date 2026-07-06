export interface WorkspaceGuardContext {
  tenantId: string;
  workspaceKey: string;
  planCode: string;
  subscriptionStatus: string;
  currentUsage?: number;
  usageLimit?: number;
}