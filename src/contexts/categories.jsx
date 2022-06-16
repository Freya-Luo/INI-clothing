import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

// import { addCollectionAndDocs, getCategoriesAndDocs } from "../utils/firebase/firebase";

// initialize the context object
export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => [],
});

const COLLECTIONS = gql`
  query GetCollections {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const { loading, error, data } = useQuery(COLLECTIONS);
  const value = { categories, loading, error };

  useEffect(() => {
    if (data) {
      const { collections } = data;
      const map = collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
      setCategories(map);
    }
  }, [data]);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
