import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions';
import Heading from './heading';
import Content from './content';

const Detail = () => {

    // sayfanin dinamic url'ini almak icin
    const { code } = useParams();
    // console.log(params)

    const { isLoading, error, data } = useSelector((store) => store.covidReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(code));
    }, [code])

    return (
        <div className="flex-1 text-white grid place-items-center p-6">
            <div className="bg-white border shadow-2xl min-h-[60%] py-6 px-8 rounded-lg max-w-4xl max-md:w-full md:w-[80%]">
                <Heading />

                <Content />
            </div>
        </div>
    )
}

export default Detail