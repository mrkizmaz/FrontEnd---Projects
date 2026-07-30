import React from 'react'
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import { FaShareNodes } from 'react-icons/fa6'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db, auth } from '../../firebase/index'

const Buttons = ({ tweet }) => {

    // oturumu acik olan kullanici twiti likelayanlar arasinda mi?
    const isLiked = tweet.likes.includes(auth.currentUser.uid)

    // like butonuna tiklaninca
    const toggleLike = () => {
        // güncellenecek dökümanin referansini verir
        const tweetRef = doc(db, "tweets", tweet.id);

        // like'lamadiysam: kullanici idsini likes dizisine ekle
        // like'ladiysam: kullanici idsini likes dizisinden kaldir
        updateDoc(tweetRef, {
            likes: isLiked ? arrayRemove(auth.currentUser.uid) : arrayUnion(auth.currentUser.uid)
        })
    }

    return (
        <div className='flex justify-between items-center text-zinc-400'>
            <button className='tweet-icon hover:text-blue-500 hover:bg-blue-400/20'>
                <FaRegComment />
            </button>

            <button className='tweet-icon hover:text-green-400 hover:bg-green-300/20'>
                <FaRetweet />
            </button>

            <button
                onClick={toggleLike}
                className='flex gap-1 items-center hover:text-red-400 relative'>
                <div className='tweet-icon hover:bg-red-300/20'>
                    {isLiked ? <FaHeart className='text-red-400' /> : <FaRegHeart />}
                </div>
                <span className={`${isLiked && "text-red-400"} absolute -end-1`}>
                    {tweet.likes.length}
                </span>
            </button>

            <button className='tweet-icon hover:bg-gray-300/20'>
                <FaShareNodes />
            </button>
        </div>
    )
}

export default Buttons