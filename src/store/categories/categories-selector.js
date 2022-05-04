import { createSelector } from "reselect";

// React uses "===" to detect the equality, so memo "categories" in the store state
// (inputSource, outputResult): inputs and result are cached for later use.
// If the selector is called again with the same arguments, the previously
// cached result is returned instead of recalculating a new result.
export const memoCategories = createSelector(
  [(state) => state.categories],
  (categoriesSlice) => categoriesSlice.categories,
);

export const selectCategories = createSelector([memoCategories], (categories) =>
  // will returned the cached result by wrapped using reselect cache mechanism
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}),
);

export const selectLoading = createSelector([(state) => state.categories], (categories) => categories.loading);
/**
 * Update: using reselect to memorize the categories state.
 *
 * The rootReducer always returns back a new object to be reflected in the Redux store
 * even though only user/categories/cart reducer part updates. (1 out of 3)
 *
 * So, the moment the Reducer runs => rootReducer a new object
 * => all the useSelector methods are called => causing those components to re-render.
 *
 * But React is smart, useSelector(select func) will only cause the component to re-render if the return of
 * the select func we passed to it is different reference. ("===")
 * Thus, changing reduce() to a way to memorize the categories array with the help of reselect
 */
