import ActionTypes from "../ActionTypes";

const initialState = {
    list: [],
    isLoading: true,
    error: null,
};

const listReducer = (state = initialState, { type, payload }) => {
    // neler gelmmis bakalim
    // console.log(type);
    switch (type) {
        case ActionTypes.LIST_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.LIST_ERROR:
            return { ...state, isLoading: false, error: payload };

        case ActionTypes.LIST_SUCCESS:
            return { ...state, isLoading: false, error: null, list: payload };

        case ActionTypes.ADD_TO_LIST:
            const updated = state.list.concat(payload);
            return { ...state, list: updated };

        case ActionTypes.REMOVE_FROM_LIST:
            const filtered = state.list.filter((i) => i.id !== payload.id);
            return { ...state, list: filtered };

        default:
            return state;
    }
};

export default listReducer;

/*
 - filmleri görüntüleyebilmek icin önce manuel olarak tmdb sitesinden (https://developer.themoviedb.org/reference/account-add-to-watchlist) birkac film eklendi
 - Filmler su sekilde eklendi;
  Yukaridaki siteye girilerek RAW_BODY kismina 
    {
    "media_type":"movie", 
    "media_id":"1252037", 
    "watchlist":true
    }
     manuel olarak yazildi
 */