import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getFlights = createAsyncThunk("flight/getFlight", async () => {

    // parametreleri belirle
    const params = {
        bl_lat: '46.940205',
        bl_lng: '5.507349',
        tr_lat: '54.816373',
        tr_lng: '15.600558',
        limit: '200',
    };

    const res = await api.get('/flights/list-in-boundary', { params });

    // api'dan gelen veriler dizi icerisine dizi oldugundan dolayi projede kullanimi kolay olsun diye dizi icindeki dizile nesneye cevir
    const formatted = res.data.aircraft.map((item) => ({
        id: item[0],
        code: item[1],
        lat: item[2],
        lng: item[3],
        deg: item[4],
    }));

    // console.log(formatted);

    // slice'a aktarilacak payloadi belirle
    return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {

    const params = {
        flight: id,
    };

    const res = await api.get("flights/detail", { params });

    return res.data;
})