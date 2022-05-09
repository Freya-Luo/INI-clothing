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
    default:
      return state;
  }
};
