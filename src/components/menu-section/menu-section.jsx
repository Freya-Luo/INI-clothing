import React from 'react'

import './menu-section.scss'

const MenuSection = ({ title, url }) => {
    return (
        <div className='menu-section'>
            <div
                className='background-img'
                style={{ backgroundImage: `url(${url})` }}
            ></div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SEE MORE</span>
            </div>
        </div>
    )
}

export default MenuSection
