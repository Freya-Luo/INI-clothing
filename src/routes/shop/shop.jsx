import { useContext, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/category-preview/category-preview';
import { CategoriesContext } from '../../contexts/categories';
import './shop.scss';

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <CategoriesPreview key={title} title={title} products={products} />;
      })}
    </div>
  );
};

export default Shop;
