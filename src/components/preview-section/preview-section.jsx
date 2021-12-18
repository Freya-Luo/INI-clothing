import React from 'react'

import './preview-section.scss'
import Item from '../item/item'

const PreviewSection = ({ title, preview_items }) => {
    return (
        <div className='preview-section-wrapper'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview-section'>
                {preview_items.map(({ id, ...restProps }, index) => {
                    if (index >= 4) return null
                    return <Item key={id} {...restProps} />
                })}
            </div>
        </div>
    )
}

export default PreviewSection
