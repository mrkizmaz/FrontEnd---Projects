import moment from 'moment';
import React from 'react'
import { MdEdit } from 'react-icons/md';

const User = ({ tweet }) => {
    // console.log(tweet);

    // sahte kullanici ismi olustur
    const username = tweet.user.name.toLowerCase().replaceAll(" ", "_");
    // tarihi object veri formatina cevir
    let date = tweet.createdAt?.toDate();
    // console.log(date);
    // gönderi tarihinin suanin tarihinden uzakligini hesaplamak icin moment kütüphanesi eklendi!
    date = moment(date).fromNow(true);

    return (
        <div className='flex gap-3 items-center whitespace-nowrap text-gray-400'>
            <p className='text-white font-semibold'>{tweet.user.name}</p>
            <p className='text-sm'>@{username}</p>
            <p className='text-sm'>{date}</p>

            {tweet.isEdited && (
                <p>
                    <MdEdit className='md:hidden' />
                    <span className='max-md:hidden text-xs'>* düzenlendi</span>
                </p>
            )}
        </div>
    )
}

export default User