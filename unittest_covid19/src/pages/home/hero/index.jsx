import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Hero = () => {
    return (
        <div className='bg-blue-900 text-white'>
            <div className='container py-10 pb-16 md:pt-[100px] md:pb-[120px] grid md:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-5 md:gap-10'>
                    <h1 className='text-3xl md:text-4xl'>
                        COVID-19 CANLI TAKIP
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet molestiae tempora facilis veniam quibusdam, quaerat nostrum distinctio natus dolore iste blanditiis, optio magni deserunt laudantium voluptas nulla beatae consequuntur! Inventore!
                        Debitis, officiis! Eligendi reiciendis, consequuntur, cupiditate, blanditiis illo magnam quia sequi nihil magni dolore nisi animi. Commodi voluptatem non sit a libero quaerat, in ducimus earum dolorum temporibus asperiores at.
                    </p>

                    <div className='flex gap-5'>
                        <button className='hero-btn hover:brightness-75'>
                            <span className='flex-1 whitespace-nowrap'>
                                Nasil Korunulur?
                            </span>
                            <MdKeyboardArrowRight className='text-2xl' />
                        </button>
                        <button className='hero-btn bg-transparent border border-white hover:bg-white hover:text-black'>
                            <span>
                                Doktor Bul
                            </span>
                            <MdKeyboardArrowRight />
                        </button>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <img src="/hero.png" alt=""
                        className='w-[300px] md:h-[250px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero