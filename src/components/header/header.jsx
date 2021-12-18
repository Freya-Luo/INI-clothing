import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../source/skyatlas.svg'
import { ReactComponent as ShoppingBag } from '../../source/shopping-bag.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faGem } from '@fortawesome/free-regular-svg-icons'
import './header.scss'

const Header = () => (
    <div className='header'>
        <Link className='logo-wrapper' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='header-item-wrapper'>
            <Link className='header-item' to='/shop'>
                <FontAwesomeIcon icon={faGem} size='lg' /> SHOP
            </Link>
            <Link className='header-item' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' /> CONTACT
            </Link>
            <Link className='header-item' to='/login'>
                <FontAwesomeIcon icon={faUser} size='lg' /> LOGIN
            </Link>
            <div className='shopping-bag'>
                <ShoppingBag className='logo' />
            </div>
        </div>
    </div>
)

export default Header
