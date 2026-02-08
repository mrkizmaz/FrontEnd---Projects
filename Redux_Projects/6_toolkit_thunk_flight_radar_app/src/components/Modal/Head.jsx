import React from 'react'
import nullCheck from '../../utils/nullCheck'

const Head = ({ info, close }) => {
    return (
        <div className='close-wrapper'>
            <div>
                <h3 title='Call Sign'>{nullCheck(info.identification?.callsign)}</h3>
                <span title='Flight Number'>{nullCheck(info.identification?.number?.default)}</span>
                <span title='Aircraft type code'>{nullCheck(info.aircraft?.model?.code)}</span>
            </div>
            <button onClick={close}>X</button>
        </div>
    )
}

export default Head