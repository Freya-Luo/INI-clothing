import React from 'react'

import './preview-section.scss'

const PreviewSection = ({ title, preview_items }) => {
    return (
        <div className='preview-section-wrapper'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview-section'>
                {preview_items.map((item, index) => {
                    if (index >= 4) return null
                    return <div key={item.id}>{item.name}</div>
                })}
            </div>
        </div>
    )
}

export default PreviewSection
