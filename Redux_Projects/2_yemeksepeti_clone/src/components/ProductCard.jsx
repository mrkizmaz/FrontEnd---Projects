import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { createItem, updateItem } from '../redux/acions/basketActions';
import store from "../redux/store"

const ProductCard = ({ item }) => {
    // console.log(item)

    // ayni ürün tekrar eklendigi zaman buton yerine ürün adedi yazmak icin
    const { cart } = useSelector((store) => store.CardReducer);
    // console.log(cart)

    // prop olarak gelen ürün sepete daha önce eklenmis mi?
    const found = cart?.find((cartItem) => cartItem.productId === item.id);
    // console.log(found);

    const dispatch = useDispatch();

    // arti butonuna tiklaninca
    const handleAdd = () => {
        found
            // eger ürün sepette var ise miktarini 1 arttiran aksiyonu calistir
            ? dispatch(updateItem(found.id, found.amount + 1))
            // eger ürün sepette yok ise ürünü sepete ekleyen aksiyonu calistir
            : dispatch(createItem(item));
    };

    return (
        <div className='grid grid-cols-[1fr_115px] gap-3 border-white shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300'>
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='text-xl font-semibold'>{item.title}</h1>
                    <p className='text-gray-500 my-1'>{item.desc}</p>
                </div>
                <p className='text-lg font-semibold'>${item.price}</p>
            </div>
            <div className='relative'>
                <img src={item.photo} className='rounded-md object-cover size-full' />
                <button onClick={handleAdd} className='absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 size-8 grid place-items-center'>
                    {found ? <span className='font-bold'>{found.amount}</span> : <FaPlus />}
                </button>
            </div>
        </div>
    )
}

export default ProductCard