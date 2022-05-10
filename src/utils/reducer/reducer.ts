import { AnyAction } from "redux";

/** Match extension definition.
 * A type prediate: a func that verifies if a specific argument that it receives
 * is a narrower/more specific type.
 *
 * AC: Action Creator; ReturnType<AC> gets the Action/ActionPayload
 */
type Match<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"]; // get the "type" field in the return value of createAction()
  match(action: AnyAction): action is ReturnType<AC>;
};

// overload signatures for matcher
// actionCreator with no arguments : here, also specify "type" field must be included
export function matcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Match<AC>;
// actionCreator with some arguments
export function matcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Match<AC>;
// implementation signatures
export function matcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

/** ----------- Action type definition. ------------ */
// define the action type
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

/**
 * 1) '&' intersection keyword: intersection type is a joining of different types
 * 2) ReturnType<Func>: get the return type of a function Func
 */
