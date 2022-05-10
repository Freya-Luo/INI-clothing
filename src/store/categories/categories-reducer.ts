import { AnyAction } from "redux";
import { Category } from "./categories-types";
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFail } from "./categories-action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly loading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

/**
 * Any actions (e.g., even init actions) that fire will pass through all reducers,
 * which is how redux handles the action dispatch.
 * Again, the way that redux determines that this does not need to be re-rendered is
 * through the default return.
 *
 * @param state current category state passed to this reducer
 * @param action action passed through, it indeed can be any action (AnyAction)
 * @returns new category state modified based on the action
 */
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as AnyAction): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      loading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, loading: false, categories: action.payload };
  }

  if (fetchCategoriesFail.match(action)) {
    return { ...state, loading: false, error: action.payload };
  }
  // using matcher to give a type guard, since TS (static compiler) not detect the default case
  return state;
};
