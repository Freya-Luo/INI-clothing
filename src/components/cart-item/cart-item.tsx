import "./cart-item.scss";
import { CartItem as TCartItem } from "../../store/cart/cart-types";
import { FC } from "react";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          ${price} x {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
