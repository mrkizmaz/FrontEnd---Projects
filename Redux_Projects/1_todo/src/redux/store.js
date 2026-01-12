import { combineReducers, createStore } from "redux";
import todoReducers from "./reducers/todoReducers";
import userReducers from "./reducers/userReducers";
import themeReducers from "./reducers/themeReducers";


const rootReducer = combineReducers({
    todoReducers,
    themeReducers,
    userReducers,
});

// store
const store = createStore(rootReducer);

export default store;
