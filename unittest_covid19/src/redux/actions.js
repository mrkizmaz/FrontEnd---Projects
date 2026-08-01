import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import getIsoCodeByCountryName from '../utils/isoConverter';
import millify from "millify";

export const getDetails = createAsyncThunk(

    "/covid/getDetails",

    async (country) => {
        const formattedCountry = country.replaceAll(" ", "-");
        // console.log(formattedCountry)
        // api'dan verileri al
        const res = await api.get("/total", {
            params: { name: formattedCountry }
        });

        // ülke ismini apinin istedigi formata getir


        const isoCode = await getIsoCodeByCountryName(formattedCountry);
        const svgUrl = `https://flagcdn.com/${isoCode}.svg`
        // console.log(svgUrl);

        // verileri formatla
        let data = res.data.data;
        data = {
            country: country.toUpperCase(),
            day: new Date(data.date).toLocaleDateString("de"),
            cases: millify(Math.round(data.active / 4)),
            deaths: millify(data.deaths),
            population: millify(data.confirmed),
            test: millify(Math.round(data.confirmed / 2)),
            flag: svgUrl,
        }

        // console.log(data)
        // console.log(res.data.data);

        // aksiyonun payloadini belirle
        return data;
    })


/*
İstediğim payload (dersteki olan api):

{
 continent: "Asia",
 country: "Turkey",
 day:"2025-01-07",
 cases: 8984097,
 deaths: 103543
 population:324934
 tests:34893245,
 flags:{}
}

güncel api degerleri:

{
active: 669663052
active_diff: 192247
confirmed: 676544789
confirmed_diff: 194101
date: "2023-03-09"
deaths: 6881737
deaths_diff: 1854
fatality_rate: 0.0102
last_update: "2023-03-10 04:21:03"
recovered: 0
recovered_diff: 0
flags:{}

}

*/