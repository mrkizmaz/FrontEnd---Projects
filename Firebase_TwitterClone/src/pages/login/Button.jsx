import React from 'react'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Button = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                toast.success("Basariyla oturum acildi");
                navigate("/feed");
            })
            .catch((err) => {
                toast.error("Hata!: " + err.code)
            })

    }

    return (
        <button
            onClick={handleLogin}
            className='bg-white flex items-center py-2 px-10 justify-center rounded-full text-black transition hover:bg-gray-300 whitespace-nowrap gap-x-2'>
            <img src="g-logo.png" alt="" className='h-[20px]' />
            <span>Google ile Giris Yap</span>
        </button>
    )
}

export default Button