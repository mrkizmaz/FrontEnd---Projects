import React from 'react'
import Button from './Button'
import Form from './Form'


const Login = () => {
    return (
        <div className='h-screen bg-[#242424] text-white grid place-items-center'>
            <div className='bg-black py-28 px-40 rounded-lg flex flex-col gap-10 w-2xl'>
                <div className='flex justify-center'>
                    <img src="x-logo.webp" alt="x logo" className='h-[80px]' />
                </div>
                <h1 className='text-lg font-bold text-center'>Twitter'a Giris Yap </h1>

                <Button />
                <Form />
            </div>
        </div>
    )
}

export default Login