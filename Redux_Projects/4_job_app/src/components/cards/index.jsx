import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { MdCalendarMonth, MdLocationPin } from 'react-icons/md'
import './card.scss'
import DelButton from './DelButton'


const Card = ({ job }) => {
    // console.log(job);

    const colors = {
        "Reddedildi": "red",
        "Mülakat": "green",
        "Devam Ediyor": "orange",
    };

    return (
        <div className='card'>
            <section className='head'>
                <div>
                    <span className='letter'>{job.company[0]}</span>
                </div>
                <div className='info'>
                    <p>{job.position}</p>
                    <p>{job.company}</p>
                </div>
                <div>
                    <DelButton />
                </div>
            </section>

            <section className='body'>
                <div className='field'>
                    <MdLocationPin />
                    <p>{job.location}</p>
                </div>
                <div className='field'>
                    <FaBuilding />
                    <p>{job.type}</p>
                </div>
                <div className='field'>
                    <MdCalendarMonth />
                    <p>{new Date(job.date).toLocaleDateString("de", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    })}</p>
                </div>
                <div className='status'>
                    <p style={{ background: colors[job.status] }}>{job.status}</p>
                </div>
            </section>
        </div>
    )
}

export default Card