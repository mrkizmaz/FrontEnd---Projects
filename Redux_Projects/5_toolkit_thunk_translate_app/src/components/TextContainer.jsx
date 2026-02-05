import React from 'react'

const TextContainer = () => {
    return (
        <div className='flex gap-3 mt-5 md:gap-26.25 max-md:flex-col'>
            <div className='flex-1'>
                <textarea className='w-full min-h-60 max-h-125 text-black text-[20px] rounded p-2.5 bg-white'></textarea>
            </div>
            <div className='flex-1'>
                <textarea disabled
                    className='w-full min-h-60 max-h-125 text-[20px] rounded p-2.5 bg-gray-300'></textarea>
            </div>
        </div >
    )
}

export default TextContainer