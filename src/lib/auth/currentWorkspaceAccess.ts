import {
  getDefaultWorkspaceAccessIdentity,
  WorkspaceAccessIdentity,
} from "./workspaceAccessIdentity";

export async function getCurrentWorkspaceAccess(): Promise<WorkspaceAccessIdentity> {
  return {
    ...getDefaultWorkspaceAccessIdentity(),
  };
}