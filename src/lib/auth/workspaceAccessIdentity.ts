export interface WorkspaceAccessIdentity {
  executive: boolean;
  administration: boolean;
  intelligence: boolean;
  commandCenter: boolean;
  compliance: boolean;
  multicloud: boolean;
}

export function getDefaultWorkspaceAccessIdentity(): WorkspaceAccessIdentity {
  return {
    executive: true,
    administration: true,
    intelligence: true,
    commandCenter: true,
    compliance: true,
    multicloud: true,
  };
}