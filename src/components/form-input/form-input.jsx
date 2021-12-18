import React from 'react'

import './form-input.scss'

const FormInput = ({ label, handleChange, ...restProps }) => (
    <div className='input-wrapper'>
        {label ? <label className='input-label'>{label}</label> : null}
        <input
            className='input-field'
            onChange={handleChange}
            {...restProps}
            required
        />
    </div>
)

export default FormInput
