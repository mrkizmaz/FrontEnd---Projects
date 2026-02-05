import React from 'react'

const Input = ({ label, name, handleChange }) => {
    return (
        <div>
            {/* label ve inputu birbirine baglamak icin htmlFor ve id degerleri ayni olmali! */}
            <label htmlFor={name}>{label}</label>
            <input id={name} type="text" name={name} onChange={handleChange} />
        </div>
    )
}

export default Input