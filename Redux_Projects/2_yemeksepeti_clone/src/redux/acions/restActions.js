import axios from "axios";
import actionTypes from "../actionTypes";

// 1- normal redux aktion
export const setRestaurants = async (payload) => ({
    type: actionTypes.REST_SUCCESS,
    payload,
});


// 2- redux-thunk ile yazilmis asenkron aktion
// fonksiyon icerisinde fonksiyon return edilmeli!
export const getRestaurants = () => {
    return (dispatch) => {
        // asenkron islemler yapilabilir

        // dispatch bilesenden bagimsiz bir sekilde ile reducer'a haber gönderilebilir

        dispatch({ type: actionTypes.REST_LOAD });

        axios.get("http://localhost:3000/restaurants")
            .then((res) => dispatch({
                type: actionTypes.REST_SUCCESS,
                payload: res.data,
            }))
            .catch((err) => dispatch({
                type: actionTypes.REST_ERROR,
                payload: err
            }))
    }
}