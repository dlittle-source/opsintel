import type {
  WorkspaceGuardRuntimeProviderConsumer,
  WorkspaceGuardRuntimeProviderConsumerInput,
  WorkspaceGuardRuntimeProviderConsumerResult,
} from "./workspaceGuardRuntimeProviderConsumerTypes";

export class DefaultWorkspaceGuardRuntimeProviderConsumer {
  constructor(
    private readonly provider: WorkspaceGuardRuntimeProviderConsumer,
  ) {}

  async consume(
    input: WorkspaceGuardRuntimeProviderConsumerInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerResult> {
    return this.provider.provide(input);
  }
}