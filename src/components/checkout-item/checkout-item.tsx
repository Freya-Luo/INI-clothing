import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, clearCartItem, removeCartItem } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";
import { CartItem } from "../../store/cart/cart-types";
import "./checkout-item.scss";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>

      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeCartItem(cartItems, cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartItem(cartItems, cartItem))}>
          &#10095;
        </div>
      </span>

      <span className="price"> {price}</span>

      <div className="remove-button" onClick={() => dispatch(clearCartItem(cartItems, cartItem))}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
