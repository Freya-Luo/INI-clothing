import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../source/skyatlas.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
// import { ReactComponent as Login } from '../../source/user-regular.svg'
// import { ReactComponent as Shop } from '../../source/shopify-brands.svg'
// import { ReactComponent as Contact } from '../../source/envelope-regular.svg'
import './header.scss'

const Header = () => (
    <div className='header'>
        <Link className='logo-wrapper' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='header-item-wrapper'>
            <Link className='header-item' to='/shop'>
                <FontAwesomeIcon icon={faShoppingBag} size='lg' /> SHOP
            </Link>
            <Link className='header-item' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' /> CONTACT
            </Link>
            <Link className='header-item' to='/login'>
                <FontAwesomeIcon icon={faUser} size='lg' /> LOGIN
            </Link>
        </div>
    </div>
)

export default Header
