import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionTypes } from '../redux/actionTypes';
import api from '../api';
import Model from './Model';

const Card = ({ todo }) => {

    const dispatch = useDispatch();

    // modalin ekrana gelmesini izlemek icin
    const [isOpen, setIsOpen] = useState(false);

    const timestamp = todo.createdAt;
    const theDate = new Date(timestamp);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }

    const handleStatus = () => {
        api
            .patch(`/todos/${todo.id}`, { isDone: !todo.isDone, })
            .then(() =>
                dispatch({
                    type: actionTypes.STATUS,
                    payload: todo
                }))

        // eylem yapilacagindan dolayi reducera haber ver

    }

    const handleDelete = () => {
        api
            .delete(`/todos/${todo.id}`)
            .then((res) => dispatch({
                type: actionTypes.DELETE,
                payload: res.data.id
            }))
    }

    return (

        <tr>
            <th scope="row">{todo.id.slice(0, 8)}</th>
            <td>{theDate.toLocaleDateString('de-DE')}</td>
            <td>{todo.text}</td>
            <td><button onClick={() => setIsOpen(true)}
                className='btn btn-primary px-2 py-1'>Update</button></td>
            <td><button onClick={handleStatus}
                className={`'px-2 py-1 btn btn-${!todo.isDone ? 'warning' : 'success'}`}>{!todo.isDone ? "no" : "yes"}</button></td>
            <td><button onClick={handleDelete}
                className='btn btn-danger px-2 py-1'>Delete</button></td>

            {isOpen &&
                <Model todo={todo} close={() => setIsOpen(false)} />}
        </tr>

    )
}

export default Card