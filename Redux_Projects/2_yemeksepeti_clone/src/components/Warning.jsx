import React from 'react';
import { Link } from 'react-router-dom';

const Warning = () => {
    return (
        <div className='flex flex-col items-center gap-3'>

            <p>Sepette henüz herhangi bir ürün yok</p>

            <Link to="/" className='border-white p-2 shadow rounded hover:bg-gray-100'>Ürünlere gözat</Link>
        </div>
    )
}

export default Warning