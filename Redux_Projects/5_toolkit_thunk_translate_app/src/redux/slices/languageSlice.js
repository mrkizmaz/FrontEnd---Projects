import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";

const initialState = {
    isLoading: true,
    error: null,
    languages: [],
}

const langSlice = createSlice({
    name: "language",
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer.addCase(getLanguages.pending, (state) => {
            state.isLoading = true;
        });

        builer.addCase(getLanguages.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        builer.addCase(getLanguages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.languages = action.payload;
        });
    },
});

export default langSlice.reducer;