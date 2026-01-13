import { useDispatch } from "react-redux";
import { actionTypes } from "./actionTypes";

const addTodos = (payload) => {
    return {
        type: actionTypes.ADD,
        payload
    }
};

export default addTodos;