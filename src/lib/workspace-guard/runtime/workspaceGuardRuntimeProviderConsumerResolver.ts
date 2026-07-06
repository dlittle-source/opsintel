import type {
  WorkspaceGuardRuntimeProviderConsumer,
} from "./workspaceGuardRuntimeProviderConsumerTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerResolver,
} from "./workspaceGuardRuntimeProviderConsumerResolverTypes";

import { DefaultWorkspaceGuardRuntimeProviderConsumerRegistry } from "./workspaceGuardRuntimeProviderConsumerRegistry";

export class DefaultWorkspaceGuardRuntimeProviderConsumerResolver
  implements WorkspaceGuardRuntimeProviderConsumerResolver
{
  constructor(
    private readonly registry: DefaultWorkspaceGuardRuntimeProviderConsumerRegistry,
  ) {}

  resolve(
    key: string,
  ): WorkspaceGuardRuntimeProviderConsumer | undefined {
    return this.registry.get(key);
  }
}