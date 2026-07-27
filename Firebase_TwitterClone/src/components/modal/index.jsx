// HOC (high-order-components) yazarak projedeki modellerin ortak olan kapsayicilarini burada tanimlayarak kod tekrarina düsmenin önüne gecicez

import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Modal = ({ children, isOpen, close }) => {
    return (
        isOpen && (
            <div className='fixed bg-zinc-800/60 inset-0 backdrop-blur-sm z-[9999] grid place-items-center'>
                <div className='bg-black py-10 px-8 w-3/4 max-w-[600px] rounded-xl'>
                    <div className='flex justify-end'>
                        <button onClick={close} className='text-4xl transition hover:text-gray-500'>
                            <IoMdClose />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        )
    )
}

export default Modal