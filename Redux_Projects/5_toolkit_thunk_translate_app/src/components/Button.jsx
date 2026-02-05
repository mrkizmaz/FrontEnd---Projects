import React from 'react'

const Button = ({ handleTranslate }) => {
    return (
        <div onClick={handleTranslate}
            className='bg-zinc-600 px-5 py-3 rounded-md font-semibold hover:bg-zinc-700 cursor-pointer transition mt-3 disabled:brightness-50 text-center'
        >Cevir</div>
    )
}

export default Button