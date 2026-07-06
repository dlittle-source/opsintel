import { DefaultWorkspaceGuardRuntimeProviderConsumerService } from "./workspaceGuardRuntimeProviderConsumerService";
import { DefaultWorkspaceGuardRuntimeProviderConsumer } from "./workspaceGuardRuntimeProviderConsumer";

export function createWorkspaceGuardRuntimeProviderConsumerService(
  consumer: DefaultWorkspaceGuardRuntimeProviderConsumer,
): DefaultWorkspaceGuardRuntimeProviderConsumerService {
  return new DefaultWorkspaceGuardRuntimeProviderConsumerService(
    consumer,
  );
}