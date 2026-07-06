import type {
  MiddlewareRuntimeContext,
  MiddlewareRuntimeContextResolver,
} from "./middlewareRuntimeContextTypes";

export class DefaultMiddlewareRuntimeContextResolver
  implements MiddlewareRuntimeContextResolver
{
  async resolve(
    pathname: string
  ): Promise<MiddlewareRuntimeContext> {
    return {
      pathname,
    };
  }
}