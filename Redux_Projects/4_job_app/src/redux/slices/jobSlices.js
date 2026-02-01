import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    error: null,
    jobs: [],
};

const jobSlice = createSlice({
    name: "job",
    initialState: initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        },
        setJobs: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.jobs = action.payload;
        },
    }
});

export const { setLoading, setError, setJobs } = jobSlice.actions;
export default jobSlice.reducer;