import { CATEGORIES_ACTION_TYPES, Category, CategoryItem } from "./categories-types";
import { createAction, Action, ActionPayload } from "../../utils/reducer/reducer";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase";
import { Dispatch } from "react";

// create action types for each action
type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
type FetchCategoriesSuccess = ActionPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;
type FetchCategoriesFail = ActionPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, Error>;

export type CategoriesAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFail;

// async action creation func: () => async (dispatch) => {}
export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    // start fetching categories
    dispatch(createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

    try {
      // fetch categories success
      const categoriesRes = await getCategoriesAndDocs();
      const categories: Category[] = categoriesRes.map((each) => each as Category);
      dispatch(createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories));
    } catch (err) {
      if (err instanceof Error) {
        // fetch categories fail
        dispatch(createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, err));
      }
    }
  };
};
