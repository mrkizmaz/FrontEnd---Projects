import React, { useEffect, useState } from 'react'
import api from '../../api'
import Error from '../../components/error'
import Loader from '../../components/loader'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../constant'

const Hero = () => {

    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get("/movie/popular")
            .then((res) => {
                // console.log(res.data.results)
                // * rastgele 1 filmi ekrana yazdirma

                // filmler dizisi
                const movies = res.data.results;
                // 0-1 arasi sayi üret ve taban degerini alarak tam sayi yap
                const i = Math.floor(Math.random() * movies.length);
                // state'e aktar
                setMovie(movies[i]);
            })
            .catch((err) => console.log(err.message))
    }, []);

    // rastgele 1 film
    // console.log(movie);


    if (error) return <Error info={error} />

    if (!movie) return <Loader />


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:may-h-[400px] gap-5 mb-10'>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <h1 className='text-3xl font-bold'>{movie.title}</h1>
                <p className='text-start text-gray-300'>{movie.overview}</p>
                <p>
                    <span>IMDB: </span>
                    <span className='text-yellow-400 ms-2 font-semibold'>{movie.vote_average.toFixed(2)}</span>
                </p>

                <div className='flex gap-5'>
                    <Link to={`/movie/${movie.id}`} className='py-2 px-4 bg-red-600 rounded transition hover:bg-red-700'>Filmi Izle</Link>
                    <button className='py-2 px-4 bg-blue-600 rounded transition hover:bg-blue-700'>Kaydet</button>
                </div>
            </div>
            <div>
                <img className='drop-shadow-xl drop-shadow-cyan-700/50 my-4 object-contain rounded max-h-75'
                    src={baseImgUrl + movie.backdrop_path} />
            </div>
        </div>
    )
}

export default Hero