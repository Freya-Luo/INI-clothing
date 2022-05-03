import "./product-card.scss";
import Button from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addCartItem } from "../../store/cart/cart-action";

const ProductCard = ({ product }) => {
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
      <Button buttonType="inverted" onClick={() => dispatch(addCartItem(cartItems, product))}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
