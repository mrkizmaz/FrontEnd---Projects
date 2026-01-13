import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import api from '../api';
import { actionTypes } from '../redux/actionTypes';
import { toast } from 'react-toastify';

const Model = ({ todo, close }) => {

    const dispatch = useDispatch();
    const inputRef = useRef();

    const handleClick = () => {
        const newText = inputRef.current.value;
        // console.log(newText);

        // update todo
        const updatedTodo = { ...todo, text: newText }

        // api'da güncelle
        api
            .patch(`/todos/${todo.id}`, { text: newText })
            .then(() => {
                dispatch({
                    type: actionTypes.UPDATE,
                    payload: updatedTodo
                })

                // modali kapa
                close();

                // bildirim gönder
                toast.success("todo basariyla güncellendi.")
            })


    }

    return (
        <div className="modal d-block bg-blur" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered text-black">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Todo'yu Güncelle</h5>
                        <button className="btn-close" onClick={close}></button>
                    </div>

                    <div className="modal-body">
                        <div>
                            <label>Yeni Başlık</label>
                            <input
                                defaultValue={todo.text}
                                ref={inputRef}
                                className="form-control shadow mt-2"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button onClick={close} type="button" className="btn btn-secondary">
                            Vazgeç
                        </button>

                        <button onClick={handleClick} type="button" className="btn btn-primary">
                            Kaydet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model