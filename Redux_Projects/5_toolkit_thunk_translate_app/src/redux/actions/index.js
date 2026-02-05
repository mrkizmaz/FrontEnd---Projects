import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk("language/getLanguages",
    async () => {
        // api istegi at
        const res = await api.get("getLanguages");

        // fulfilled aksiyonun payloadini belirle
        return res.data.data.languages;
    });