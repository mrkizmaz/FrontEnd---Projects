// * Asenkron Thunk Aksiyonu
// Sepet verilerini api'dan alip reducera dispatch ile haber gönderecek

import actionTypes from "../actionTypes";
import api from "../../utils/api";
import { v4 } from "uuid";

// sepetteki bilgileri al
export const getCard = () => (dispatch) => {
    dispatch({ type: actionTypes.CARD_LOAD, });

    api
        .get("/cart")
        .then((res) => dispatch({ type: actionTypes.CARD_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: actionTypes.CARD_ERROR, payload: err }))
};

// ürünü api'ya kaydettikten sonra reducera eklenme haberini gönder
export const createItem = (item) => (dispatch) => {
    // console.log(item);

    // 1- sepete eklenecek olan ürünün bilgilerini belirle
    const newItem = {
        id: v4(),
        productId: item.id,
        category: item.category,
        title: item.title,
        price: item.price,
        photo: item.photo,
        amount: 1,
    }

    // 2- api'ya sepete eklemek icin istek at
    api
        .post("/cart", newItem)
        // 3- istek basarili olursa reducera haber ver
        .then(() => dispatch({ type: actionTypes.CREATE_ITEM, payload: newItem }))
        // hata olursa
        .catch((err) => dispatch({ type: actionTypes.CARD_ERROR, payload: err }))
};