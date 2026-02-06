import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/languageSlice";
import translateReducer from "./slices/translateSlice";

export default configureStore({
    reducer: {
        langReducer, translateReducer,
    }
});
