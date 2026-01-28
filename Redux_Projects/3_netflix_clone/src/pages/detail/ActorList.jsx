import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react'
import { baseImgUrl } from '../../constant';
import dflt from "../../../public/default.webp"
import man from "../../../public/man.jpg"
import woman from "../../../public/woman.jpg"

const ActorList = ({ actors }) => {
    // console.log(actors);
    return (
        <div className='mb-10'>
            <h2 className='font-semibold text-lg md:text-xl my-5'>Oyuncular</h2>

            <Splide options={{ autoWidth: true, pagination: false, gap: "15px" }}>
                {actors.map((actor, key) => {

                    const url = actor.profile_path
                        ? baseImgUrl + actor.profile_path
                        : actor.gender === 1
                            ? "/woman.jpg"
                            : actor.gender === 2
                                ? "/man.jpg"
                                : "/default.webp"

                    return (
                        <SplideSlide key={key}>
                            <div className='w-40 h-full flex flex-col'>
                                <img className='h-full object-cover' src={url} alt="" />
                                <h2 className='text-center font-semibold mt-2'>{actor.name}</h2>
                            </div>
                        </SplideSlide>
                    )
                }
                )}
            </Splide>
        </div>
    )
}

export default ActorList