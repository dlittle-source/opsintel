import { MiddlewareRuntimeContextFactory } from "./middlewareRuntimeContextFactory";
import { DefaultMiddlewareRuntimeAdapter } from "./middlewareRuntimeAdapter";

import type {
  MiddlewareRuntimeService,
} from "./middlewareRuntimeServiceTypes";

import type {
  MiddlewareRuntimeAdapterResult,
} from "./middlewareRuntimeAdapterTypes";

export class DefaultMiddlewareRuntimeService
  implements MiddlewareRuntimeService
{
  private readonly contextResolver =
    MiddlewareRuntimeContextFactory.create();

  private readonly adapter =
    new DefaultMiddlewareRuntimeAdapter();

  async evaluate(
    pathname: string
  ): Promise<MiddlewareRuntimeAdapterResult> {
    const context =
      await this.contextResolver.resolve(pathname);

    return this.adapter.execute({
      pathname: context.pathname,
      tenantId: context.tenantId,
      userId: context.userId,
      workspaceKey: context.workspaceKey,
    });
  }
}