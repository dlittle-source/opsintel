import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistryFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistryFactory";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorServiceFactory {
  static create(): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService {
    const registry =
      WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistryFactory.create();

    return new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService(
      registry,
    );
  }
}