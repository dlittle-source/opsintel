export interface MiddlewareRuntimeContext {
  pathname: string;
  tenantId?: string;
  userId?: string;
  workspaceKey?: string;
}

export interface MiddlewareRuntimeContextResolver {
  resolve(
    pathname: string
  ): Promise<MiddlewareRuntimeContext>;
}