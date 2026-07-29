import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { FaRegSmile } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineGifBox } from 'react-icons/md'
import { toast } from 'react-toastify'
import { db } from '../../firebase'
import uploadToStorage from '../../firebase/uploadToStorage'
import Loader from '../loader/loader'

const Form = ({ user }) => {

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    // yeni resim eklendiginde kullaniciya ön izlemesini gösterir
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            // local fotolari urle cevirme metodu
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    // console.log(image)

    const clearImage = () => {
        setImage(null);
        // inputu bos stringe cevirme metodu: kontrol etmek icin classnamede hiddeni kaldir!
        fileInputRef.current.value = null;
        fileInputRef.current.files = null;
    }

    // form gönderildiginde
    const handleSubmit = async (e) => {
        e.preventDefault();

        // inputlardaki verilere eris
        const text = e.target.text.value.trim();
        const file = e.target.image.files[0];
        // console.log(text, file);

        // yazi ve resim yoksa ise hata ver
        if (!text && !file) return toast.warning("Lütfen gönderi icerigini belirleyiniz!");

        try {
            // yüklenme basladiginda isloadingi güncelle
            setIsLoading(true);

            // resmi firebase storagea yükle
            const imageURL = uploadToStorage(file);
            // fonsk durdur
            // return;

            // koleksiyonun referansini al
            const tweetsCol = collection(db, "tweets");

            // koleksiyona yeni twit belgesi olustur
            await addDoc(tweetsCol, {
                content: {
                    text,
                    image: null, // imageURL olarak degistir sonra!
                },
                isEdited: false,
                likes: [],
                user: {
                    id: user.uid,
                    name: user.displayName,
                    photo: user.photoURL,
                },
                createdAt: serverTimestamp(),
            });

            // inputlari temizle
            e.target.reset();
            setImage(null);

        } catch (error) {
            console.log(error)
        }

        // yüklenme bittiginde isloadingi güncelle
        setIsLoading(false);
    }

    return (
        <div className='border-b border-zinc-600 p-4 flex gap-3'>
            <img src={user.photoURL} className='size-[40px] md:size-[45px] rounded-full' />

            <form
                onSubmit={handleSubmit}
                className='w-full p-2'>
                <textarea type="text" name='text' className='w-full bg-transparent mb-2 md:text-lg text-gray-300 outline-none resize-y min-h-[40px] max-h-[300px]' placeholder='Neler Oluyor?'
                />

                {image && (
                    <div className='relative mb-3'>
                        <button
                            type='button'
                            onClick={clearImage}
                            className='absolute text-xl top-3 end-3 p-3 bg-black/90 rounded-full transition hover:bg-zinc-800'>
                            <IoMdClose />
                        </button>
                        <img src={image} className='rounded-lg' />
                    </div>
                )}

                <div className='flex justify-between'>
                    <div className='flex gap-4 text-xl text-[#1D9BF0]'>
                        <label htmlFor='image' className='form-icon'>
                            <input type="file" name='image' id='image' className='hidden'
                                onChange={onImageChange}
                                ref={fileInputRef} />
                            <CiImageOn />
                        </label>
                        <button type='button'
                            className='form-icon'>
                            <MdOutlineGifBox />
                        </button>
                        <button type='button'
                            className='form-icon'>
                            <FaRegSmile />
                        </button>

                    </div>
                    <button
                        disabled={isLoading}
                        type='submit'
                        className='bg-white font-bold px-5 py-[6px] rounded-full text-black tracking-wider transition hover:brightness-90 min-w-[100px]'>
                        {isLoading ? <Loader /> : "Gönder"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form