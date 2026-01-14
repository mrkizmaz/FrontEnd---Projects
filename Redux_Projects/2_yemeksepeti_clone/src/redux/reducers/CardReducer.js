import actionTypes from "../actionTypes";

const initialState = {
    cart: [],
    isLoading: true,
    error: null,
};


const CardReducer = (state = initialState, action) => {
    // aksiyonlar geliyor mu? console.log(action.type)
    switch (action.type) {

        case actionTypes.CARD_LOAD:
            return { ...state, isLoading: true };

        case actionTypes.CARD_ERROR:
            return { ...state, isLoading: false, error: action.payload?.message };

        case actionTypes.CARD_SUCCESS:
            return { ...state, isLoading: false, error: null, cart: action.payload };

        case actionTypes.CREATE_ITEM:
            return { ...state, cart: state.cart.concat(action.payload) }

        default:
            return state;
    }

};

export default CardReducer;