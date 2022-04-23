import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocs } from '../utils/firebase/firebase';

// initialize the context object
export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  // useEffect(() => {
  //   addCollectionAndDocs('categories', SHOP_DATA);
  // }, []);
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
