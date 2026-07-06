import type {
  MiddlewareRuntimeAdapter,
  MiddlewareRuntimeAdapterInput,
  MiddlewareRuntimeAdapterResult,
} from "./middlewareRuntimeAdapterTypes";

export class DefaultMiddlewareRuntimeAdapter
  implements MiddlewareRuntimeAdapter
{
  async execute(
    input: MiddlewareRuntimeAdapterInput
  ): Promise<MiddlewareRuntimeAdapterResult> {
    return {
      decision: "allow",
      tenantId: input.tenantId,
      workspaceKey: input.workspaceKey,
    };
  }
}