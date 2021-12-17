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
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/brHpHBC/Women.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens',
                },
                {
                    title: 'MENS',
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
                {this.state.sections.map(({ title, imageUrl, id }) => (
                    <MenuSection title={title} key={id} url={imageUrl} />
                ))}
            </div>
        )
    }
}
export default Menu
