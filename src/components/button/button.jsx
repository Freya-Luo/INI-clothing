import React from 'react'

import './button.scss'

const Button = ({ children, ...restProps }) => (
    <button className='button' {...restProps}>
        {children}
    </button>
)

export default Button
