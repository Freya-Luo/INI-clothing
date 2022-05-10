import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Preview from "../preview/preview";
import Category from "../category/category";
import "./shop.scss";
import { fetchCategories } from "../../store/categories/categories-action";

// use nested routing
// index route: with no path, then renders in the parent's outlet at the parent's URL.
// other routes: path":<param_name>""
const Shop = () => {
  useEffect(() => {
    // dispatch(fetchCategories());
    fetchCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<Preview />} />
      <Route path=":categoryName" element={<Category />} />
    </Routes>
  );
};

export default Shop;
