import React from 'react'
import Input from './Input'
import Select from './Select'
import './create.scss'
import { statusOptions, typeOptions } from "../../utills/constants"
import { toast } from 'react-toastify'
import api from "../../utills/api"
import { useDispatch } from 'react-redux'
import { createJob, setError } from '../../redux/slices/jobSlices'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate(); // herhangi bir sayfaya yönlendirmek icin

    // form gönderilince
    const handleSubmit = (e) => {
        e.preventDefault();

        // inputlardan verileri al
        const formData = new FormData(e.target);
        const jobData = Object.fromEntries(formData.entries());

        // tarih ekle
        // console.log(jobData)
        jobData.date = Date.now();

        // apiya post istegi at
        api.post("/jobs", jobData)
            .then(() => {
                dispatch(createJob(jobData));
                toast.success("Basvurulu olusturuldu");
                navigate("/");
                console.log(jobData)
            })
            .catch((err) => {
                dispatch(setError(err));
                toast.error("Basvuru olusturma basarisiz")
            })
    };

    return (
        <div className='add-page'>
            <section className='container'>

                <h2>Yeni Is Ekle</h2>

                <form onSubmit={handleSubmit}>
                    <Input label="Pozisyon" name="position" />
                    <Input label="Sirket" name="company" />
                    <Input label="Lokasyon" name="location" />
                    <Select label="Durum" name="status" options={statusOptions} />
                    <Select label="Tür" name="type" options={typeOptions} />


                    <div className='btn-wrapper'>
                        <button>
                            <span>
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                                </svg>
                                Create
                            </span>
                        </button>

                    </div>

                </form>

            </section>
        </div>
    )
}

export default Create