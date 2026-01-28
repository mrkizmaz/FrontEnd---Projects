import React from 'react'

const InfoList = ({ title, arr }) => {
    return (
        <div className='mb-5'>
            <h2 className='text-xl font-semibold mb-3'>{title}</h2>

            <div className='flex flex-wrap gap-5'>
                {arr?.map((item, key) => <span key={key} className='border py-1 px-2 rounded-md'>{item.name}</span>)}
            </div>
        </div>
    )
}

export default InfoList