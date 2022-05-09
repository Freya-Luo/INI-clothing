import { AnyAction } from "redux";

export type Action<T> = {
  type: T;
};

export type ActionPayload<T, P> = {
  type: T;
  payload: P;
};

// overload signatures, order most specific one 1st is necessary
export function createAction<T extends string, P>(type: T, payload: P): ActionPayload<T, P>;
export function createAction<T extends string>(type: T, payload: void): Action<T>;
// implementation signature
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
