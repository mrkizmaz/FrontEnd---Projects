import React, { useState } from 'react'

const Card = ({ todo }) => {

    const [idCount, setIdCount] = useState(0);

    return (

        <tr>
            <th scope="row">{() => setIdCount(idCount + 1)}</th>
            <td>{todo.text}</td>
            <td>{todo.createdAt}</td>
            <td>{!todo.isDone ? "false" : "true"}</td>
        </tr>

    )
}

export default Card