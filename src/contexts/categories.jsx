import { createContext, useReducer, useEffect } from 'react';

import { addCollectionAndDocs, getCategoriesAndDocs } from '../utils/firebase/firebase';
import { createAction } from '../utils/reducer/reducer';

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: 'SET_CATEGORIES',
};

const initState = {
  categories: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

// initialize the context object
export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => [],
});

export const CategoriesProvider = ({ children }) => {
  const [{ categories }, dispatch] = useReducer(categoriesReducer, initState);
  const value = { categories };

  useEffect(() => {
    const getData = async () => {
      const map = await getCategoriesAndDocs('categories');
      dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, map));
    };
    getData();
  }, []);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
