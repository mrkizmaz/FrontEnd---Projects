import React from 'react'
import { IoBookmarks } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='mb-10 flex justify-between items-center'>

            <Link to="/">
                <img src="./logo.svg" alt="netflix" className='max-w-37.5' />
            </Link>

            <Link to="/watch-list" className='flex gap-2 items-center hover:text-gray-300 transition'>
                <IoBookmarks /> Izleme Listesi
            </Link>

        </header>
    )
}

export default Header