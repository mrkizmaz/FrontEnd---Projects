import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../redux/actions';
import Head from './Head';
import Galery from './Galery';
import Airport from './Airport';
import Time from './Time';
import Aircraft from './Aircraft';
import Loader from '../Loader';

const Modal = ({ id, close }) => {

    const { isLoading, error, info } = useSelector((store) => store.detail);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(id));
    }, [id]);

    return (
        <div className='modal-outer'>
            <div className='modal-inner'>

                {
                    isLoading ? (<Loader />) : error ? (<Error err={error} />) : (info &&
                        (<div className='info-wrapper'>

                            <Head info={info} close={close} />

                            <div className='details'>
                                <Galery data={info.aircraft.images} />
                                <Airport data={info.airport} />
                                <Time data={info.time} />
                                <Aircraft data={info.aircraft} />
                            </div>
                        </div>))
                }
            </div>
        </div>
    )
}

export default Modal