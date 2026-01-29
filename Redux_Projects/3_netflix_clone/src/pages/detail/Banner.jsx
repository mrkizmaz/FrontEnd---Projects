import React from 'react'
import { baseImgUrl } from '../../constant'

const Banner = ({ movie }) => {
    return (
        <div className='h-[20vh] md:h-[30vh] relative drop-shadow-2xl drop-shadow-cyan-700/40'>
            <img className='size-full rounded-sm object-cover'
                src={baseImgUrl + movie.backdrop_path} alt="" />

            <div className='bg-auto absolute inset-0 grid place-items-center bg-opacity-40'>
                <h2 className='text-3xl md:text-4xl font-semibold font-mono text-center'>
                    {movie.title}
                </h2>
            </div>
        </div>
    )
}

export default Banner