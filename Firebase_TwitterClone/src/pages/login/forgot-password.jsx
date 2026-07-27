import React, { useRef, useState } from 'react'
import Modal from '../../components/modal';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const ForgotPassword = () => {

    const [isOpen, setIsOpen] = useState();
    const inputRef = useRef();

    const handleReset = (e) => {
        e.preventDefault();

        const email = inputRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.info("Mailinize sifre sifirlama baglantisi gönderildi. Lütfen kontrol ediniz.")
                setIsOpen(false)
            })
            .catch(() => {
                toast.error("Mail gönderilemedi!")
            })
    }

    return (
        <>
            <span className='flex justify-end text-sm text-gray-500 hover:text-gray-400 mt-2 text-end cursor-pointer' onClick={() => setIsOpen(true)}>Sifreni mi unuttun?</span>
            {isOpen &&
                <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl'>Sifreni mi unuttun?</h1>
                        <p className='text-gray-400'>Email adresine bir sifre sifirlama baglantisi göndericez</p>
                        <input type="text" className='mt-5 input' ref={inputRef} />

                        <div className='flex flex-col mx-30'>
                            <button onClick={handleReset} className='bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1'>Mail Gönder</button>
                            <button className='bg-red-500 hover:bg-gray-300 transition text-black rounded-full mt-4 py-1'>Iptal</button>
                        </div>
                    </div>
                </Modal>}

        </>
    )
}

export default ForgotPassword;