import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const List = () => {

    // -todoReducers'da tutulan statea abone olma
    const todoState = useSelector((store) => store.todoReducers);
    // console.log(todoState);



    return (
        <div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TEXT</th>
                        <th scope="col">CREATED DATE</th>
                        <th scope="col">IS DONE?</th>
                    </tr>
                </thead>
                <tbody>

                    {todoState.todos.map((todo) => (
                        <Card key={todo.id} todo={todo} />
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default List