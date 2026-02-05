import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/languageSlice";

export default configureStore({
    reducer: {
        langReducer,
    }
});
