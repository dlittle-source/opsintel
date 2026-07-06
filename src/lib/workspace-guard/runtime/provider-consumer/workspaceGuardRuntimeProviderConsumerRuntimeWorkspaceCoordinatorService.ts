import {
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator,
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator";

import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistry } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistry";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService {
  constructor(
    private readonly registry: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistry,
  ) {}

  coordinate(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorResult {
    let coordinator = this.registry.resolve(input.workspaceId);

    if (!coordinator) {
      coordinator =
        new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator();

      this.registry.register(input.workspaceId, coordinator);
    }

    return coordinator.coordinate(input);
  }
}