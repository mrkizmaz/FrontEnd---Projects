import React from 'react'
import Filter from '../../components/filter'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader'
import Error from '../../components/error'
import './home.scss'
import Card from '../../components/cards'

const Home = () => {
    // storea abone ol ve statedeki verileri al
    const { isLoading, error, jobs } = useSelector((store) => store.jobReducer);
    // console.log(jobs);

    return (
        <div className='home-page'>
            <Filter />

            {isLoading ? (<Loader />) : error ? (<Error />) : (
                <div className='card-wrapper'>
                    {jobs.map((job, id) => <Card key={id} job={job} />)}
                </div>
            )}
        </div>
    )
}

export default Home