import React from 'react'

const OrderBox = ({ cart }) => {
    // console.log(cart);

    // sepetteki toplam ürün adedi
    const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

    // sepetteki ürünlerin toplam fiyati
    const totalPrice = cart.reduce((total, i) => total + (i.price + i.amount), 0);

    return (
        <div className='p-5 rounded-md border h-fit'>
            <h2 className='font-semibold text-lg'>Siparis Detaylari</h2>
            <p className='flex items-center gap-2 my-4'>
                <span className='text-gray-600'>Ürün Adedi: </span>
                <span className='text-lg font-bold text-red-500'>{totalAmount}</span>
            </p>

            <p className='flex items-center gap-2 my-4'>
                <span className='text-gray-600'>Toplam Fiyat: </span>
                <span className='text-lg font-bold text-red-500'>$ {totalPrice.toFixed(2)}</span>
            </p>

            <button className='bg-red-500 py-2 px-3 rounded-md text-white transition hover:bg-red-400 '>Siparisi Onayla</button>

        </div>
    )
}

export default OrderBox