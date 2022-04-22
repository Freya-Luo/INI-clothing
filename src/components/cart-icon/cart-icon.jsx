import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart';
import './cart-icon.scss';

const CartIcon = () => {
  const { cartHasItems, setcartHasItems } = useContext(CartContext);

  const toggleCartDropdown = () => setcartHasItems(!cartHasItems);

  return (
    <div className='cart-icon-container' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
