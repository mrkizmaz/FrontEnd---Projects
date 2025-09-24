import { renderCards } from "./scripts/ui.js";


// data her yerde erisebilmek icin global degisken tanimi
let data;

// menü verilerini json dosyasindan ceken fonksiyon
async function fetchMenu() {
    // api dan verileri al
    const resp = await fetch("./db.json");

    // json verisini js formatina cevir
    data = await resp.json();
}





// sayfanin yüklenme olayini izle
window.addEventListener("DOMContentLoaded", () => {
    // verileri ceken fonksiyonu calistir
    fetchMenu()
        // fonksiyon basarili oldugu zaman (api istegi) verileri ekrana bas
        .then(() => renderCards(data.menu));
})


// buttons alanindaki inputlari cagir
const inputs = document.querySelectorAll("#buttons input");

// inputlar dizinini dön
inputs.forEach((input) => {
    // herbir inputun secilme olayini izle
    input.addEventListener("change", () => {
        // secilen kategori
        const selected = input.id;

        // eger all seciliyse bütün kartlari ekrana bas
        if (selected == "all") {
            renderCards(data.menu);
        }
        else {
            // menü elemanlarindan secilen kategoriye ait elemanlari filtrele
            const filtered = data.menu.filter((i => i.category === selected));

            // filtrelenen detayi ekrana bas
            renderCards(filtered);
        }
    })
})
