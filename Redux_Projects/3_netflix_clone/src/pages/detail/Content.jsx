import React from 'react'
import InfoList from './InfoList'
import millify from 'millify'


const Content = ({ movie }) => {
    // console.log(movie)

    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
            <div>
                <InfoList />
                <InfoList />
                <InfoList />
                <InfoList />
            </div>

            <div className='flex flex-col gap-3'>
                <p>{movie.overview}</p>

                <p>
                    <span>Bütce: </span>
                    <span className='text-green-500 font-semibold'>{movie.budget === 0 ? "bilinmiyor" : "€ " + movie.budget}</span>
                </p>

                <p>
                    <span>Hasilat: </span>
                    <span className='text-green-500 font-semibold'>{movie.revenue === 0 ? "bilinmiyor" : "€ " + movie.revenue}</span>
                </p>
            </div>
        </div>
    )
}

export default Content