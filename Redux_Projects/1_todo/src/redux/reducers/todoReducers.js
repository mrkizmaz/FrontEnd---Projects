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

        default:
            return state;
    }

};


export default todoReducers;