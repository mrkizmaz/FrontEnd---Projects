import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import CardReducer from "./reducers/CardReducer";

const rootReducer = combineReducers({
    restaurantReducer,
    CardReducer,
});

// action'larin icerisinde api istegi kazandirmak icin thunk dahil edilir.
// apply middleware herhangi bir arayızılımı redux'a dahil etmeye yarar.
// biz burada thunk'ı dahil etmek için kullanıyoruz
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;