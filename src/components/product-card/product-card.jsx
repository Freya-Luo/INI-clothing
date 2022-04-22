import './product-card.scss';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addCartItem } = useContext(CartContext);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addCartItem(product)}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
