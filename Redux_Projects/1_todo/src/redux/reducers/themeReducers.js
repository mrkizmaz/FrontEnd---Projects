import { actionTypes } from "../actionTypes"

const initialState = {
    themes: [],
};

const themeReducers = (state = initialState, action) => {
    // console.log(action.payload);
    switch (action.tpe) {
        case actionTypes.ADDTHEME:
            const newThemes = state.themes.concat(action.payload);
            return { themes: newThemes };


        default:
            return state;
    }
};


export default themeReducers;