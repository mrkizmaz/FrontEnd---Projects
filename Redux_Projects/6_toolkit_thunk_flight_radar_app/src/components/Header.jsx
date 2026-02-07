import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import { useSelector } from 'react-redux'

const Header = () => {

    const { isLoading, error, flights } = useSelector((store) => store.flight);

    return (
        <header className='bg-white p-3 px-4 d-flex justify-content-between align-items-center shadow'>
            <Link to="/" className='d-flex align-items-center gap-2'>
                <img src="/radar-logo.webp" width={40} />
                <h4>Ucus Radar</h4>
            </Link>

            <Buttons />

            <h5 className='text-black fw-bold info'>
                {isLoading ? "Ucuslar yükleniyor..."
                    : error ? error
                        : `${flights.length} Ucus bulundu...`}
            </h5>
        </header>
    )
}

export default Header