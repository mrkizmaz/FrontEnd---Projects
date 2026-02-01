import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../redux/slices/jobSlices";

const store = configureStore({
    reducer: {
        jobReducer,
    }
});


export default store;