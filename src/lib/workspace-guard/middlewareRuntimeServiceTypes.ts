import type {
  MiddlewareRuntimeContext,
} from "./middlewareRuntimeContextTypes";

import type {
  MiddlewareRuntimeAdapterResult,
} from "./middlewareRuntimeAdapterTypes";

export interface MiddlewareRuntimeService {
  evaluate(
    pathname: string
  ): Promise<MiddlewareRuntimeAdapterResult>;
}

export interface MiddlewareRuntimeEvaluation {
  context: MiddlewareRuntimeContext;
  result: MiddlewareRuntimeAdapterResult;
}