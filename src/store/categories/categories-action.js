import { CATEGORIES_ACTION_TYPES } from "./categories-types";
import { createAction } from "../../utils/reducer/reducer";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase";

// async action creation func: () => async (dispatch) => {}
export const fetchCategories = () => {
  return async (dispatch) => {
    // start fetching categories
    dispatch(createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

    try {
      // fetch categories success
      const categories = await getCategoriesAndDocs("categories");
      dispatch(createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories));
    } catch (err) {
      // fetch categories fail
      dispatch(createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, err));
    }
  };
};
