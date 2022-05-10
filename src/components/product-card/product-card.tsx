import { FC } from "react";
import "./product-card.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addCartItem } from "../../store/cart/cart-action";
import { CategoryItem } from "../../store/categories/categories-types";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => dispatch(addCartItem(cartItems, product))}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
