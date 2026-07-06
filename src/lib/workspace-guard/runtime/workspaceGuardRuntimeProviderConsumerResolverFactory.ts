import { DefaultWorkspaceGuardRuntimeProviderConsumerResolver } from "./workspaceGuardRuntimeProviderConsumerResolver";
import { DefaultWorkspaceGuardRuntimeProviderConsumerRegistry } from "./workspaceGuardRuntimeProviderConsumerRegistry";

export function createWorkspaceGuardRuntimeProviderConsumerResolver(
  registry: DefaultWorkspaceGuardRuntimeProviderConsumerRegistry,
): DefaultWorkspaceGuardRuntimeProviderConsumerResolver {
  return new DefaultWorkspaceGuardRuntimeProviderConsumerResolver(
    registry,
  );
}