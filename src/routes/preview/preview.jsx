import { useContext, Fragment } from 'react';

import CategoriesPreview from '../../components/category-preview/category-preview';
import { CategoriesContext } from '../../contexts/categories';

const Preview = () => {
  const { categories } = useContext(CategoriesContext);

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
