import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/skyatlas.svg';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faGem } from '@fortawesome/free-regular-svg-icons';
import './navigation.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            <FontAwesomeIcon icon={faGem} size='lg' /> SHOP
          </Link>
          <Link className='nav-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} size='lg' /> CONTACT
          </Link>
          <Link className='nav-link' to='/auth'>
            <FontAwesomeIcon icon={faUser} size='lg' />
            SIGN IN
          </Link>
          <div className='shopping-bag'>
            <ShoppingBag className='logo' />
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
