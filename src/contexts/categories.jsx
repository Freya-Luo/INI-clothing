import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocs, getCategoriesAndDocs } from '../utils/firebase/firebase';

// initialize the context object
export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

  useEffect(() => {
    const getData = async () => {
      const map = await getCategoriesAndDocs('categories');
      console.log(map);
      setCategories(map);
    };
    getData();
  }, []);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
