import { createContext, useState } from 'react';
import PRODUCTS from '../shopData.json';

// initialize the context object
export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
