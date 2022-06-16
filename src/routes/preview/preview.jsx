import { useContext, Fragment } from "react";
import Spinner from "../../components/spinner/spinner";
import CategoriesPreview from "../../components/category-preview/category-preview";
import { CategoriesContext } from "../../contexts/categories";

const Preview = () => {
  const { categories, loading } = useContext(CategoriesContext);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return <CategoriesPreview key={title} title={title} products={products} />;
        })
      )}
    </Fragment>
  );
};

export default Preview;
