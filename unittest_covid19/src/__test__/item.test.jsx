// Normal sartlarda bir bileseni kullanirken prop gönderiyorsaniz, test ederken de ayni sekilde prop göndermeniz gerekmektedir. 
// test ortaminda prop gönderirken, normalde gönderdiginiz degerlere benzer degerler göndermelisiniz.

import { render, screen } from "@testing-library/react"
import Items from "../pages/home/items"


test('Gönderilen proplar dogur sekilde kullanilir', () => {
    // bileseni renderla
    render(<Items color="text-blue-500" text="Toplam Vaka" value="300,8M" />);

    // icon elementini al
    const icon = screen.getByTestId("icon");

    // color propu ile gönderdigimiz deger className'de var mi?
    expect(icon).toHaveClass("text-blue-500");

    // text propu ile gönderdigimiz deger ekranda var mi?
    screen.getByText("Toplam Vaka");

    // value propu ile gönderdigimiz deger ekranda var mi?
    screen.getByText("300,8M")

})