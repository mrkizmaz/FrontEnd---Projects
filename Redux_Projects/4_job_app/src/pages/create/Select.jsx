import React from 'react'

const Select = ({ label, name, options }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                <option value="">Seciniz</option>
                {options.map((item, id) => (
                    <option key={id}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default Select