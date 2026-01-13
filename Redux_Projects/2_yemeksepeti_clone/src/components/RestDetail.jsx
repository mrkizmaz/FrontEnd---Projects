import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import Loader from './Loader';
import { FaArrowDown, FaClock, FaStar } from 'react-icons/fa';

const RestDetail = () => {

    // bu bilesendeki veriler sadece bu sayfada kullanilacagi icin state kullanilmali!
    const [rest, setRest] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        api
            .get(`/restaurants/${id}`)
            .then((res) => setRest(res.data))

    }, [])

    if (!rest) return <Loader />


    return (
        <div className='flex gap-5'>
            <img src={rest.photo}
                className='w-[150px] rounded-md ' />

            <div className='flex flex-col justify-between'>
                <div className=' flex text-red-500 gap-5'>
                    <p className='flex items-center gap-2'>
                        <FaArrowDown />
                        <span className='text-gray-700'>min {rest.minPrice} $</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <FaClock />
                        <span className='text-gray-700'>min {rest.estimatedDelivery} dakika</span>
                    </p>
                </div>
                <h1 className='text-2xl md:text-3xl font-semibold'>{rest.name}</h1>
                <p className='flex items-center gap-2'>
                    <FaStar className='text-yellow-500' />
                    <span className='text-gray-700'>{rest.rating}</span>
                    <button className='text-red-500 font-semibold py-1 px-2 rounded hover:bg-red-100 transition'>Yorumlari gör</button>
                </p>
            </div>
        </div>
    )
}

export default RestDetail