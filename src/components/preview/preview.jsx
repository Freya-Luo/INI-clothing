import React from 'react'

import './preview.scss'
import PreviewSection from '../preview-section/preview-section'

const Preview = ({ store }) => (
    <>
        {store.map(({ id, items, ...restProps }) => (
            <PreviewSection key={id} preview_items={items} {...restProps} />
        ))}
    </>
)

export default Preview
