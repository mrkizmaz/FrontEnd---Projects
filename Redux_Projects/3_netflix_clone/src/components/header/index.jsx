import React from 'react'
import { IoBookmarks } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import store from "../../redux/store"

const Header = () => {
    const { list } = useSelector((store) => store);

    return (
        <header className='mb-10 flex justify-between items-center'>

            <Link to="/">
                <img src="./netflix.png" alt="netflix" className='max-w-45' />
            </Link>

            <Link to="/watch-list" className='flex gap-5 items-center hover:text-gray-300 transition'>
                <div className='relative'>
                    <IoBookmarks className='text-2xl' />
                    <span className='absolute -right-3 -top-3 bg-red-600 size-6 text-center rounded-full font-semibold text-sm'>{list.length}</span>
                </div>
                Izleme Listesi
            </Link>

        </header>
    )
}

export default Header