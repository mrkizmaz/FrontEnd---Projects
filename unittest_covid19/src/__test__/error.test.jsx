import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

const info = "Internetiniz cok yavas"

test('prop olarak alinan hata mesaji ekrana basilir', () => {
    render(
        <Error info={info} />
    );

    screen.getByText(info);
    // screen.getByText(/Internetiniz/i);
});


// eger bir bilesene prop olarak gönderilen fonksiyonu test etmek istiyorsak bos bir fonksiyon göndermek yerine bir mock fonksiyon olusturup onu prop olarak göndermeliyiz.
test('prop olarak alinan fonksiyon butona tiklaninca calisir', () => {

    // jest kütüphanesini kullanarak sahte bir fonksiyon olustur
    const mockFn = jest.fn();

    // bileseni renderla
    render(
        <Error info={info} refetch={() => {

            // tekrar dene butonuna tikla
            fireEvent.click(screen.getByRole("button"));

            // jest ile olusturulan test edilebilir mock fonksiyonu calisti mi kontrol et
            exmpCountryDetail(mockFn).toHaveBeenCalled();
        }} />
    )
})