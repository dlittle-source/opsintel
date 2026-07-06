import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistryFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistryFactory";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRuntime } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRuntime";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRuntimeFactory {
  static create(): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRuntime {
    const registry =
      WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistryFactory.create();

    const service =
      new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService(
        registry,
      );

    return new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRuntime(
      service,
    );
  }
}