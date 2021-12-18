import React from 'react'

import './item.scss'

const Item = ({ name, imageUrl, price }) => (
    <div className='item'>
        <div
            className='item-img'
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className='item-info'>
            <span className='item-name'>{name}</span>
            <span className='item-price'>$ {price}</span>
        </div>
    </div>
)

export default Item
