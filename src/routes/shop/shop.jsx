import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../preview/preview';
import Category from '../category/category';
import './shop.scss';

// use nested routing
// index route: with no path, then renders in the parent's outlet at the parent's URL.
// other routes: path":<param_name>""
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':categoryName' element={<Category />} />
    </Routes>
  );
};

export default Shop;
