import { DefaultWorkspaceGuardRuntimeEvaluator } from "./workspaceGuardRuntimeEvaluator";

import type {
  WorkspaceGuardRuntimeEvaluator,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class WorkspaceGuardRuntimeEvaluatorFactory {
  static create(): WorkspaceGuardRuntimeEvaluator {
    return new DefaultWorkspaceGuardRuntimeEvaluator();
  }
}