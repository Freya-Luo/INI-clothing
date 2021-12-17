import React from 'react'

import './menu-section.scss'

const MenuSection = ({ title, url }) => {
    return (
        <div
            style={{ backgroundImage: `url(${url})` }}
            className='menu-section'
        >
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SEE MORE</span>
            </div>
        </div>
    )
}

export default MenuSection
