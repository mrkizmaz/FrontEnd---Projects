import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"
import Content from "../pages/detail/content";
import { exmpCountryDetail } from "../utils/contants";
import { thunk } from "redux-thunk";

// sahte store olusturacak method
const mockStore = configureStore([thunk]);

test('store yüklenme durumundayken ekrana loader gelir', () => {
    const fakeStore = mockStore({ isLoading: true, error: null, data: null })

    render(
        <Provider store={fakeStore}>
            <Content />
        </Provider>
    );

    // ekrana loader gelir
    screen.getAllByTestId("content-loader");
});

test("store hata durumundayken ekrana error gelir", () => {
    const fakeStore = mockStore({
        isLoading: false,
        error: "zaman asimi",
        data: null,
    })

    render(
        <Provider store={fakeStore}>
            <Content />
        </Provider>
    );

    screen.getByTestId("error");
})

test('storea veri geldiginde ekrana nesnedeki her bir deger icin kart basilir', () => {
    const fakeStore = mockStore({ isLoading: false, error: false, data: exmpCountryDetail });

    render(
        <Provider store={fakeStore}>
            <Content />
        </Provider>
    );

    // data nesnesini diziye cevir
    const arr = Object.entries(exmpCountryDetail).filter((i) => i[0] !== "flag");

    // dizideki her bir deger icin kart icerisinde bilgiler basilir
    arr.forEach((item) => {
        // ekrana itemin key degerleri geliyor mu
        screen.getByText(item[0]);

        // ekrana itemin value degerleri geliyor mu
        screen.getByText(item[1]);
    })
})




// Content.jsx componenti useSelector (react-redux) kullandigi icin Provider ile sarmalamak gerekiyor
// react-router-dom kullanilsaydi BrowserRouter ile sarmalamak gerekir