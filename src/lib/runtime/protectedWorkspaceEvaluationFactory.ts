import { ProtectedWorkspaceEvaluationService } from "./protectedWorkspaceEvaluationService";

export class ProtectedWorkspaceEvaluationFactory {
  static create(): ProtectedWorkspaceEvaluationService {
    return new ProtectedWorkspaceEvaluationService();
  }
}