import React, { useEffect, useState } from 'react'
import Input from "../../pages/create/Input"
import Select from "../../pages/create/Select"
import { sortOptions, statusOptions, typeOptions } from "../../utills/constants"
import api from '../../utills/api'
import { useDispatch } from 'react-redux'
import { setJobs } from "../../redux/slices/jobSlices"

const Filter = () => {

    const [text, setText] = useState();
    // console.log(text);
    const [debouncedText, setDebouncedText] = useState();
    const [status, setStatus] = useState();
    const [type, setType] = useState();
    const [sort, setSort] = useState();


    const dispatch = useDispatch();

    // state her degistiginde api istegi atmak icin
    useEffect(() => {
        // console.log("api istegi atildi!");

        if (text === undefined) return;
        // her tus vurusunda 1 sayac baslayacak ve sayac bitiminde elde edilen inputtaki text state'e aktarilacak
        const id = setTimeout(() => setDebouncedText(text), 1000);


        // eger süre bitmeden useEffect tekrak calisirsa (yani yeni tusa basilirsa) önceki sayaci iptal et
        return () => clearTimeout(id);
    }, [text]);

    // filtrelere göre api'dan verileri al ardindan reduceri güncelle
    useEffect(() => {
        // console.log("api istegi atiliyor")
        const params = {
            q: debouncedText,
            status,
            type,
            _sort: sort === "a-z" || sort === "z-a" ? "company" : "date",
            _order: sort === "a-z" || sort === "Oldest" ? "asc" : "desc",
        }
        api.get("/jobs", { params })
            .then((res) => dispatch(setJobs(res.data)))
            .catch((err) => console.log(err))
    }, [debouncedText, status, type, sort])

    return (
        <div className='filter-sec'>
            <h2>Filtereleme Formu</h2>

            <form>
                <Input label="Ara" handleChange={(e) => setText(e.target.value)} />
                <Select label="Durum" options={statusOptions} handleChange={(e) => setStatus(e.target.value)} />
                <Select label="Tür" options={typeOptions} handleChange={(e) => setType(e.target.value)} />
                <Select label="Sirala" options={sortOptions} handleChange={(e) => setSort(e.target.value)} />
            </form>

            <div className='btn-wrapper'>
                <button className='btn'>Filtrelemeyi Sifirla</button>
            </div>

        </div>
    )
}

export default Filter