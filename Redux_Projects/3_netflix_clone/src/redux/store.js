import { applyMiddleware, createStore } from "redux";
import listReducer from "./reducers/listReducer";
// api'dan gelen verileri storeda tutmak icin thunk gerekiyor!
import { thunk } from "redux-thunk";

// tek bir reducer oldugu icin combine etmeye gerek yok!
const store = createStore(listReducer, applyMiddleware(thunk));

export default store;