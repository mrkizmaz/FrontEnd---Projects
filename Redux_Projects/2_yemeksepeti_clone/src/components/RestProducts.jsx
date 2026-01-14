import React, { useEffect, useState } from 'react'
import { FaFire } from 'react-icons/fa'
import api from '../utils/api'
import { useParams } from 'react-router-dom'
import Error from "./Error";
import Loader from './Loader';
import ProductCard from './ProductCard';

const RestProducts = () => {

    const [products, setProducts] = useState(null);
    const [err, setErr] = useState(null); // hata da gelebilir

    const { id } = useParams();

    useEffect(() => {
        api
            .get(`/products/?restaurantId=${id}`)
            .then((res) => setProducts(res.data))
            .catch((err) => setErr(err.message))
    }, [])

    return (
        <div>

            {err
                ? <Error info={err.message} />
                : !products
                    ? <Loader />
                    : products.length === 0
                        ? <p>Restoran servis saatleri disindadir</p>
                        : <div>

                            <h2 className='text-2xl font-bold flex items-center gap-2'>
                                <FaFire className='text-orange-500' />
                                Popüler
                            </h2>
                            <p className='text-gray-600'>Restoranin en cok tercih edilen ürünleri</p>

                            <div className='grid lg:grid-cols-2 gap-5 mt-2'>
                                {products.map((item) => (
                                    <ProductCard key={item.id} item={item} />
                                ))}
                            </div>

                        </div>}
        </div>
    )
}

export default RestProducts