import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoriesPreview from '../../components/category-preview/category-preview';
import { selectCategories } from '../../store/categories/categories-selector';


const Preview = () => {
  const categories = useSelector(selectCategories);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <CategoriesPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default Preview;
