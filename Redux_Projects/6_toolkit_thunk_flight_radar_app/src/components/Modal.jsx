import React from 'react'

const Modal = ({ id, close }) => {
    return (
        <div className='modal-outer'>
            <div className='modal-inner'>
                <div className='close-wrapper'>
                    <button onClick={close}>X</button>
                </div>
                <h2>123a122</h2>
            </div>
        </div>
    )
}

export default Modal