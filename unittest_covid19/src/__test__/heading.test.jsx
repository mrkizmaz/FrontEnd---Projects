import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Heading from "../pages/detail/heading"
import configureStore from "redux-mock-store"
import { thunk } from "redux-thunk"
import { Provider } from "react-redux"
import { exmpCountryDetail } from "../utils/contants"

// redux kullanilan bilesenleri test ederken test edecegimiz senaryodaki storeun datasina göre storeun sahte bir versiyonunu olusturmaliyiz
const mockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader basilir", () => {
    // bu test senaryosuna özel storeun kopyasini olustur
    const fakeStore = mockStore({ isLoading: true, error: null, data: null });

    // bileseni render et
    // Link kullaniliyorsa browser router, store kullaniliyorsa provider ile sarmalanmali!
    render(
        <Provider store={fakeStore}>

            <BrowserRouter>
                <Heading />
            </BrowserRouter>

        </Provider>
    );

    // ekrana loader basiliyor mu?
    screen.getByTestId("header-loader");
});


it("store'da yüklenme bittiginde ekranda loader yoktur", () => {
    // bu test senaryosuna özel storeun kopyasi olustur
    const fakeStore = mockStore({ isLoading: false, error: null, data: null });

    // bileseni renderla
    render(
        <Provider store={fakeStore}>
            <BrowserRouter>
                <Heading />
            </BrowserRouter>
        </Provider>
    );

    // todo: yarin bakalim ekranda loader yok mu?
});

it("storea veri geldiginde ekrana veriler basilir", () => {
    // bu test senaryosuna özel storeun kopyasi olustur
    const fakeStore = mockStore({
        isLoading: false,
        error: null,
        data: exmpCountryDetail
    });

    // bileseni renderla
    render(
        <Provider store={fakeStore}>
            <BrowserRouter>
                <Heading />
            </BrowserRouter>
        </Provider>
    );

    // ülke ismi ekrana geldi mi?
    screen.getByRole("heading", { name: exmpCountryDetail.country });

    // resim ekrana geldi mi?
    const img = screen.getByRole("img");

    // resmin kaynagi geldi mi
    expect(img).toHaveAttribute("src", exmpCountryDetail.svg)
});