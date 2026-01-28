import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api';
import Error from '../../components/error';
import Loader from '../../components/loader';
import Banner from './Banner';
import Content from './Content';
import ActorList from './ActorList';
import VideoList from './VideoList';
import { RiArrowLeftSLine } from 'react-icons/ri';
import SaveButton from '../../components/saveBtn/SaveButton';

const Detail = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = {
            // farkli endpointleri de dahil et
            append_to_response: "credits,videos"
        }

        api.get(`/movie/${id}`, { params })
            .then((res) => setMovie(res.data))
            .catch((err) => setError(err.message))
    }, []);

    // console.log(movie);

    if (error) return <Error info={error} />
    if (!movie) return <Loader />

    // console.log(movie)

    return (
        <div>
            <div className='flex justify-between mb-5'>
                <button className='flex items-center bg-gray-600 py-2 px-4 rounded hover:bg-gray-500 transition gap-2'>
                    <RiArrowLeftSLine className='text-xl' />
                    Back</button>
                <SaveButton movie={movie} />
            </div>

            <Banner movie={movie} />
            <Content movie={movie} />
            <ActorList actors={movie.credits.cast} />
            <VideoList videos={movie.videos?.results} />

        </div>
    )
}

export default Detail