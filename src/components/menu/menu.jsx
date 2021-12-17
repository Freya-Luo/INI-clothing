import React from 'react'

import MenuSection from '../menu-section/menu-section'
import './menu.scss'

const Menu = () => {
    const titles = ['HATS', 'JACKETS', 'SNEAKERS', "All WOMEN'S", "All MEN'S"]
    return (
        <div className='menu'>
            {titles.map((title, index) => (
                <MenuSection title={title} key={index} />
            ))}
        </div>
    )
}

export default Menu
