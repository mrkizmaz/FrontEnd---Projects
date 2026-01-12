import { actionTypes } from "../actionTypes";

const initialState = {
    login: false,
}


const userReducers = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.TOGGLE:
            return state;

        case actionTypes.ADD:
            return state;

        default:
            return state;
    }

};


export default userReducers;