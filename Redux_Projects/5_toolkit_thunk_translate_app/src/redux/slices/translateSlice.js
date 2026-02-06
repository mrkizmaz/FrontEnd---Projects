import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sourceLang: { value: "tr", label: "Turkish" },
    targetLang: { value: "en", label: "English" },
    textToTranslate: "",
    translatedText: "",
};

const transleteSlice = createSlice({
    name: "translate",
    initialState,
    reducers: {
        setSource: (state, action) => {
            state.sourceLang = action.payload;
        },

        setTarget: (state, action) => {
            state.targetLang = action.payload;
        },

        changeLangs: (state) => {
            const currentSource = state.sourceLang;
            const currentTarget = state.targetLang;

            state.sourceLang = currentTarget;
            state.targetLang = currentSource;
        },

        setText: (state, action) => {
            state.textToTranslate = action.payload;
        }
    },
    extraReducers: (builder) => { },
});

export const { setSource, setTarget, changeLangs, setText } = transleteSlice.actions;

export default transleteSlice.reducer;