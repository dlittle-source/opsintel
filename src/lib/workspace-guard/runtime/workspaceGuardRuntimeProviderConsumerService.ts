import type {
  WorkspaceGuardRuntimeProviderConsumerService,
  WorkspaceGuardRuntimeProviderConsumerServiceInput,
  WorkspaceGuardRuntimeProviderConsumerServiceResult,
} from "./workspaceGuardRuntimeProviderConsumerServiceTypes";

import { DefaultWorkspaceGuardRuntimeProviderConsumer } from "./workspaceGuardRuntimeProviderConsumer";

export class DefaultWorkspaceGuardRuntimeProviderConsumerService
  implements WorkspaceGuardRuntimeProviderConsumerService
{
  constructor(
    private readonly consumer: DefaultWorkspaceGuardRuntimeProviderConsumer,
  ) {}

  async consume(
    input: WorkspaceGuardRuntimeProviderConsumerServiceInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerServiceResult> {
    return this.consumer.consume(input);
  }
}