import { CATEGORIES_ACTION_TYPES, Category } from "./categories-types";
import { CategoriesAction } from "./categories-action";

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
 * @param action action passed through
 * @returns new category state modified based on the action
 */
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as CategoriesAction) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default: // using matcher to give a type guard, since TS (static compiler) not detect the default case
      return state;
  }
};
