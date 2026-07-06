import {
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRuntime {
  constructor(
    private readonly service: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorService,
  ) {}

  coordinate(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorResult {
    return this.service.coordinate(input);
  }
}