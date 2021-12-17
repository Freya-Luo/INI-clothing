import React, { Component } from 'react'

import MenuSection from '../menu-section/menu-section'
import './menu.scss'

class Menu extends Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats',
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets',
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers',
                },
                {
                    title: "All WOMEN'S",
                    imageUrl: 'https://i.ibb.co/chBkt65/Women.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens',
                },
                {
                    title: "All MEN'S",
                    imageUrl: 'https://i.ibb.co/f2RqqvL/Men.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens',
                },
            ],
        }
    }

    render() {
        return (
            <div className='menu'>
                {this.state.sections.map(({ id, ...restProps }) => (
                    <MenuSection key={id} {...restProps} />
                ))}
            </div>
        )
    }
}
export default Menu
