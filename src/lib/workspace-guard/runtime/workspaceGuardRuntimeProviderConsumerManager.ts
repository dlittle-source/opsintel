import type {
  WorkspaceGuardRuntimeProviderConsumerManager,
  WorkspaceGuardRuntimeProviderConsumerManagerInput,
  WorkspaceGuardRuntimeProviderConsumerManagerResult,
} from "./workspaceGuardRuntimeProviderConsumerManagerTypes";

import type { WorkspaceGuardRuntimeProviderConsumerService } from "./workspaceGuardRuntimeProviderConsumerServiceTypes";

export class DefaultWorkspaceGuardRuntimeProviderConsumerManager
  implements WorkspaceGuardRuntimeProviderConsumerManager
{
  constructor(
    private readonly service: WorkspaceGuardRuntimeProviderConsumerService,
  ) {}

  async consume(
    input: WorkspaceGuardRuntimeProviderConsumerManagerInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerManagerResult> {
    return this.service.consume(input);
  }
}