import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoriesPreview from "../../components/category-preview/category-preview";
import LoadingIcon from "../../components/loading-icon/loading-icon";
import { selectCategories, selectLoading } from "../../store/categories/categories-selector";

const Preview = () => {
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  console.log(loading);
  return (
    <Fragment>
      {loading ? (
        <LoadingIcon />
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
