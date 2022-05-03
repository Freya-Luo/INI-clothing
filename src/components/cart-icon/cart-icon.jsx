import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import "./cart-icon.scss";
import { selectCartHasItems, selectCartItemCount } from "../../store/cart/cart-selector";
import { setCartHasItems } from "../../store/cart/cart-action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartHasItems = useSelector(selectCartHasItems);
  const cartItemCount = useSelector(selectCartItemCount);

  const toggleCartDropdown = () => dispatch(setCartHasItems(!cartHasItems));

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
