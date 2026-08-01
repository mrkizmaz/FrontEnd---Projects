import React from 'react'
import Items from './items'
import millify from 'millify'

const Statistics = () => {
    return (
        <div className='container p-0'>
            <div className='bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-34px] md:mt-[-48px]'>

                <Items color="text-pink-500" text="Toplam Vaka" value={millify(53331232)} />
                <Items color="text-green-400" text="Toplam Iyilesen" value={millify(1231232)} />
                <Items color="text-gray-500" text="Toplam Vefat" value={millify(231232)} />
            </div>
        </div>

    )
}

export default Statistics