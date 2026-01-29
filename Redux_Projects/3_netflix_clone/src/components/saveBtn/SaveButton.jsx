import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleList } from '../../redux/actions';
import store from "../../redux/store"
import { MdBookmarkAdd, MdBookmarkRemove } from 'react-icons/md';

const SaveButton = ({ movie }) => {
    // console.log(movie)

    // movie listede var ise kaldir yok ise eklemek icin
    const { list } = useSelector((store) => store);
    // console.log(state)

    // prop olarak gelen movie listede var mi?
    const isAdded = list.find((item) => item.id === movie.id);
    console.log(isAdded)

    const dispatch = useDispatch();

    // eger listede var ise kaldir yok ise ekle
    const handleClick = () => {
        // isAdd degeri true veya false verilince film statik olarak eklenip cikariliyor
        dispatch(toggleList(movie, !isAdded));
    }

    return (
        <button
            onClick={handleClick}
            className='py-2 px-4 bg-blue-600 rounded transition hover:bg-blue-700 flex justify-center items-center gap-2 min-w-45 text-center cursor-pointer'>
            {isAdded ? <>
                <MdBookmarkRemove className='text-2xl' />
                Listeden Kaldir</> :
                <>
                    <MdBookmarkAdd className='text-2xl' />
                    Listeye Ekle</>}
        </button>
    )
}

export default SaveButton