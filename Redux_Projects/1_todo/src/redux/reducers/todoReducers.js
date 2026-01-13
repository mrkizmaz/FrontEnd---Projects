import { actionTypes } from "../actionTypes";

const initialstate = {
    todos: [],
}


const todoReducers = (state = initialstate, action) => {
    // console.log(action);
    switch (action.type) {
        case actionTypes.TOGGLE:
            return { ...state, isDarkTheme: !state.isDarkTheme };

        case actionTypes.ADD:
            // yeni todoyu ekle
            const newTodos = state.todos.concat(action.payload);
            return { todos: newTodos };

        case actionTypes.STATUS:
            const todoStatus = { ...action.payload, isDone: !action.payload.isDone };

            const updTodos = state.todos.map((i) => i.id === todoStatus.id ? todoStatus : i);

            return { todos: updTodos };

        case actionTypes.SET:
            return { todos: action.payload }

        case actionTypes.DELETE:
            const updatedTodos = state.todos.filter((i) => i.id !== action.payload);
            return { todos: updatedTodos };

        case actionTypes.UPDATE:
            const editedTodo = state.todos.map((i) => i.id === action.payload.id ? action.payload : i);
            return { todos: editedTodo };

        default:
            return state;
    }

};


export default todoReducers;