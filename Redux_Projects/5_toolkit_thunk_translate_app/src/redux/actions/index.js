import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// dil verilerini al
export const getLanguages = createAsyncThunk("language/getLanguages",
    async () => {
        // api istegi at
        const res = await api.get("getLanguages");

        // fulfilled aksiyonun payloadini belirle
        return res.data.data.languages;
    });

// api'dan ceviri sonucunu al
export const translateText = createAsyncThunk("translate/translateText",
    async (arg, { getState }) => {
        // store'daki state verilerini al
        const { translateReducer } = getState();

        // api'ya gönderilecek parametreleri ayarla
        const params = new URLSearchParams();
        params.set("source_language", translateReducer.sourceLang.value);
        params.set("target_language", translateReducer.targetLang.value);
        params.set("text", translateReducer.textToTranslate);

        // api'ye istek at
        const res = await api.post("/translate", params);

        console.log(res.data.data.translatedText);
        // return res.data.data.translatedText;
    }
)