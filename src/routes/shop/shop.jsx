import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocs } from '../../utils/firebase/firebase';
import { setCategories } from '../../store/categories/categories-action';

import CategoriesPreview from '../preview/preview';
import Category from '../category/category';
import './shop.scss';

// use nested routing
// index route: with no path, then renders in the parent's outlet at the parent's URL.
// other routes: path":<param_name>""
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const map = await getCategoriesAndDocs('categories');
      dispatch(setCategories(map));
    };
    getData();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':categoryName' element={<Category />} />
    </Routes>
  );
};

export default Shop;
