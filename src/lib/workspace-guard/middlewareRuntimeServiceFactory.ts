import { DefaultMiddlewareRuntimeService } from "./middlewareRuntimeService";

import type {
  MiddlewareRuntimeService,
} from "./middlewareRuntimeServiceTypes";

export class MiddlewareRuntimeServiceFactory {
  static create(): MiddlewareRuntimeService {
    return new DefaultMiddlewareRuntimeService();
  }
}