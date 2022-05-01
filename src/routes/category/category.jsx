import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card';
import { selectCategories } from '../../store/categories/categories-selector';
import './category.scss';

const Category = () => {
  const { categoryName } = useParams(); // defined by ":categoryName" in parent shop.jsx
  // !! map could be null as fetching data from db is async operation
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState(categories[categoryName]);

  // only update products when categoryName (route) or categories change
  useEffect(() => {
    setProducts(categories[categoryName]);
  }, [categoryName, categories]);

  return (
    <Fragment>
      <h2 className='category-title'>{categoryName.toUpperCase()}</h2>
      <div className='category-container'>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </Fragment>
  );
};

export default Category;
