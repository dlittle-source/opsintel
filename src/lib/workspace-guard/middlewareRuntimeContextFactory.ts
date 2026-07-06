import {
  DefaultMiddlewareRuntimeContextResolver,
} from "./middlewareRuntimeContextResolver";
import type { MiddlewareRuntimeContextResolver } from "./middlewareRuntimeContextTypes";

export class MiddlewareRuntimeContextFactory {
  static create(): MiddlewareRuntimeContextResolver {
    return new DefaultMiddlewareRuntimeContextResolver();
  }
}