import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import Spinner from "../../components/spinner/spinner";

import { gql, useQuery } from "@apollo/client";

import "./category.scss";

const GET_CATEGORY = gql`
  query ($title: String) {
    getCollectionsByTitle(title: $title) {
      title
      id
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { categoryName } = useParams(); // defined by ":categoryName" in parent shop.jsx
  // !! map could be null as fetching data from db is async operation

  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: categoryName },
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;
      setProducts(items);
    }
  }, [categoryName, data]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2 className="category-title">{categoryName.toUpperCase()}</h2>
          <div className="category-container">
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;
