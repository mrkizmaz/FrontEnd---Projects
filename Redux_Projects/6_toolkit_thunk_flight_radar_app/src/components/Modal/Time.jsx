import React from 'react'
import nullCheck from '../../utils/nullCheck'
import formatDate from '../../utils/formatDate'

const Time = ({ data }) => {
    return (
        <div className='fl-time'>
            <div>
                <span>SCHEDULED</span>
                <span>{nullCheck(formatDate(data.scheduled?.departure))}</span>
            </div>
            <div>
                <span>SCHEDULED</span>
                <span>{nullCheck(formatDate(data.scheduled?.arrival))}</span>
            </div>
            <div>
                <span>ACTUAL</span>
                <span>{nullCheck(formatDate(data.real?.departure))}</span>
            </div>
            <div>
                <span>ESTIMATED</span>
                <span>{nullCheck(formatDate(data.estimated?.arrival))}</span>
            </div>
        </div>
    )
}

export default Time