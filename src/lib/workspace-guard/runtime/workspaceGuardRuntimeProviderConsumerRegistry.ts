import type {
  WorkspaceGuardRuntimeProviderConsumer,
} from "./workspaceGuardRuntimeProviderConsumerTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRegistry,
  WorkspaceGuardRuntimeProviderConsumerRegistryEntry,
  WorkspaceGuardRuntimeProviderConsumerRegistryOptions,
} from "./workspaceGuardRuntimeProviderConsumerRegistryTypes";

export class DefaultWorkspaceGuardRuntimeProviderConsumerRegistry {
  private readonly registry: WorkspaceGuardRuntimeProviderConsumerRegistry =
    new Map();

  constructor(
    options: WorkspaceGuardRuntimeProviderConsumerRegistryOptions = {},
  ) {
    options.entries?.forEach((entry) => {
      this.register(entry);
    });
  }

  register(
    entry: WorkspaceGuardRuntimeProviderConsumerRegistryEntry,
  ): void {
    this.registry.set(entry.key, entry.consumer);
  }

  get(
    key: string,
  ): WorkspaceGuardRuntimeProviderConsumer | undefined {
    return this.registry.get(key);
  }

  has(key: string): boolean {
    return this.registry.has(key);
  }

  entries(): IterableIterator<
    [string, WorkspaceGuardRuntimeProviderConsumer]
  > {
    return this.registry.entries();
  }
}