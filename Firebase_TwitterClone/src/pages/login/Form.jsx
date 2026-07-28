import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth/cordova';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from "../../firebase"
import ForgotPassword from './forgot-password';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = () => {

    const [isSignUp, setisSignUp] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: ({ email, password }, { resetForm }) => {
            // console.log(values)
            if (isSignUp) {
                // yeni hesap olustur
                createUserWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        sendEmailVerification(res.user)
                        toast.info("Giris yapmak icin mailinize gelen dogrulama epostasini onaylayiniz.");
                        setisSignUp(false);
                        resetForm();
                    })
                    .catch((err) => {
                        toast.error("Hata!: " + err.code);
                    })
            }
            // var olan hesaba giris yap
            else {
                signInWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        toast.success("Hesaba giris yapildi");
                        navigate("/feed");
                    })
                    .catch((err) => {
                        toast.error("Hata!: " + err.code);
                    })
            }
        },
    })

    return (
        <>
            <form className='flex flex-col' onSubmit={formik.handleSubmit}>
                <label>Email</label>
                <input
                    value={formik.values.email}
                    name='email' type="email" className='input'
                    onChange={formik.handleChange}
                    autoFocus />

                <label className='mt-5'>Password</label>
                <div className='relative'>
                    <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        value={formik.values.password}
                        name='password'
                        className='input w-full'
                        onChange={formik.handleChange} />
                    <span
                        onClick={() => setShowPass(!showPass)}
                        className='absolute end-2 text-black text-2xl top-[50%] translate-y-[-40%] cursor-pointer'>
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                {!isSignUp ? <ForgotPassword /> : <div className='h-[28px] w-1'></div>}

                <button type='submit' className='mt-10 bg-white text-black font-bold rounded-full p-2 transition hover:bg-gray-300'>{isSignUp ? "Sign Up" : "Login"}</button>

                <p className='mt-5 text-center'>
                    <span className='text-gray-500'>{isSignUp ? "Hesabiniz var ise" : "Hesabiniz yok ise"}</span>
                    <span className='cursor-pointer ms-2 text-blue-500 hover:underline '
                        onClick={() => setisSignUp(!isSignUp)}
                    >{isSignUp ? "giris yapin" : "kaydolun"}</span>
                </p>
            </form>

        </>
    )
}

export default Form