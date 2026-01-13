import actionTypes from "../actionTypes";

const initialState = {
    restaurants: [],
    isLoading: true,
    error: null
}



const restaurantReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case actionTypes.REST_LOAD:
            return { ...state, isLoading: true };

        case actionTypes.REST_ERROR:
            return { ...state, isLoading: false, error: action.payload.message, };

        case actionTypes.REST_SUCCESS:
            // yüklenme bittiginden dolayi: false, hata var ise: null, restaurants'i ise actiondan gelen payload verisi ile güncelle 
            return {
                ...state,
                isLoading: false,
                error: null,
                restaurants: action.payload
            };

        case "T":
            return state;

        default:
            return state;

    }
};

export default restaurantReducer;