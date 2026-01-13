import React from 'react'
import RestDetail from '../components/RestDetail'
import RestProducts from '../components/RestProducts'

const Restaurant = () => {
    // api'da restaurant detailleri ve ürünleri ayri bir veri olarak tutuluyor
    return (
        <div>

            <div className='shadow'>
                <div className='container'>
                    <RestDetail />

                </div>
            </div>

            <div className='container'>
                <RestProducts />
            </div>


        </div>
    )
}

export default Restaurant