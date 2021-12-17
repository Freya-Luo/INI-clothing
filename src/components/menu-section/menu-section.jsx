import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-section.scss'

const MenuSection = ({ title, imageUrl, history, linkUrl, match }) => {
    return (
        <div
            className='menu-section'
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className='background-img'
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SEE MORE</span>
            </div>
        </div>
    )
}

export default withRouter(MenuSection)
