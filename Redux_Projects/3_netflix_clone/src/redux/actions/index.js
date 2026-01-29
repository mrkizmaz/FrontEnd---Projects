import api from "../../api";
import ActionTypes from "../ActionTypes";

// api-'dan izleme listesindeki filmeleri alip reducera durumu haber verecek asenkron thunk aksiyon
// /account/{account_id}/watchlist/movies --> acount id tmdb'den alindi! (watchlist-movies sekmesinden)
export const getWatchList = () => (dispatch) => {
    // yüklenmeye basladigi haberi gönder
    dispatch({ type: ActionTypes.LIST_LOADING })

    api.get(`/account/22697930/watchlist/movies`)
        .then((res) =>
            dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results }))
        .catch((err) =>
            dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message }))
};

// filmi izleme listesine ekleme/cikarma istegi atip basarili olursa durumu reducera haber verecek thunk asenkron fonksiyonu
export const toggleList = (movie, isAdd) => (dispatch) => {
    // body icerigi
    const body = {
        media_type: "movie",
        media_id: movie.id,
        watchlist: isAdd,
    };

    // api'ya istek at
    api
        .post(`/account/22697930/watchlist`, body)
        .then(() => {
            isAdd
                ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
                : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie })
        })
        .catch((err) => dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message }));
}