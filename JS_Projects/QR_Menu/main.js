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
        .then(() => console.log(data));
})


