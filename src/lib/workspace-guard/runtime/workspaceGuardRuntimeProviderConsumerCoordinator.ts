import type {
  WorkspaceGuardRuntimeProviderConsumerCoordinator,
  WorkspaceGuardRuntimeProviderConsumerCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerCoordinatorTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerManager,
} from "./workspaceGuardRuntimeProviderConsumerManagerTypes";

export class DefaultWorkspaceGuardRuntimeProviderConsumerCoordinator
  implements WorkspaceGuardRuntimeProviderConsumerCoordinator
{
  constructor(
    private readonly manager: WorkspaceGuardRuntimeProviderConsumerManager,
  ) {}

  async consume(
    input: WorkspaceGuardRuntimeProviderConsumerCoordinatorInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerCoordinatorResult> {
    return this.manager.consume(input);
  }
}