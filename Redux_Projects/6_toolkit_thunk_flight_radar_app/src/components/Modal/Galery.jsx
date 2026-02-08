import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';


const Galery = ({ data }) => {
    return (
        <div className='slider'>
            {data?.large?.length > 1 ? (
                <Splide>
                    {data.large.map((item, id) =>
                        <SplideSlide key={id}>
                            <img src={item.src} alt="plane" />
                        </SplideSlide>)}
                </Splide>
            ) :
                (<div className='warning'>
                    <p>Fotograf iceri bulunmuyor!</p>
                </div>)}
        </div>
    )
}

export default Galery