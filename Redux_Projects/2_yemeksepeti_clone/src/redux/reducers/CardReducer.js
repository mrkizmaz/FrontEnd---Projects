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

        case actionTypes.UPDATE_ITEM:
            // actionun payloadi ile gelen güncel elemanin dizideki eski halini güncelle
            const updated = state.cart.map((i) => i.id === action.payload.id ? action.payload : i);
            return { ...state, cart: updated };

        case actionTypes.DELETE_ITEM:
            const filtred = state.cart.filter((i) => i.id !== action.payload);
            return { ...state, cart: filtred };

        default:
            return state;
    }

};

export default CardReducer;