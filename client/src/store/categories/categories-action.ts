import { CATEGORIES_ACTION_TYPES, Category } from "./categories-types";
import { createAction, Action, ActionPayload, matcher } from "../../utils/reducer/reducer";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import type {} from "redux-thunk/extend-redux";

// create action types for each action
type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
type FetchCategoriesSuccess = ActionPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;
type FetchCategoriesFail = ActionPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, Error>;

type CategoriesAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFail;

// enhanced, type-restricted action creators with custom matchers
export const fetchCategoriesStart = matcher(() => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));
export const fetchCategoriesSuccess = matcher((categories: Category[]) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories),
);
export const fetchCategoriesFail = matcher((err: Error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, err),
);

// async action creation func: () => async (dispatch) => {}
export const fetchCategories = (): ThunkAction<void, any, unknown, AnyAction> => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    // start fetching categories
    dispatch(fetchCategoriesStart());

    try {
      // fetch categories success
      const categoriesRes = await getCategoriesAndDocs();
      const categories: Category[] = categoriesRes.map((each) => each as Category);
      dispatch(fetchCategoriesSuccess(categories));
    } catch (err) {
      if (err instanceof Error) {
        // fetch categories fail
        dispatch(fetchCategoriesFail(err));
      }
    }
  };
};
