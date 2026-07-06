import type {
  WorkspaceGuardRuntimeProviderConsumer,
} from "./workspaceGuardRuntimeProviderConsumerTypes";

export type WorkspaceGuardRuntimeProviderConsumerRegistry = Map<
  string,
  WorkspaceGuardRuntimeProviderConsumer
>;

export interface WorkspaceGuardRuntimeProviderConsumerRegistryEntry {
  key: string;
  consumer: WorkspaceGuardRuntimeProviderConsumer;
}

export interface WorkspaceGuardRuntimeProviderConsumerRegistryOptions {
  entries?: WorkspaceGuardRuntimeProviderConsumerRegistryEntry[];
}