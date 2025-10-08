import { personIcon } from "./constants.js";
import ui from "./ui.js";

// * Global Degiskenler
// Haritada tiklanilan noktanin koordinati
let clickedCoords;
// ls'da veri alsa al yoksa bos, JSON.parse: string (json) verisini diziye (js) verisine cevirir
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// console.log(notes);

/*
 - Kulanicinin konumunu ögrenmek icin getCurrentPosition metodu kullanacaz:
    1. Kullanici konum paylasmayi kabul ederse haritayi kullanicinin konumuna göre
    2. Kullanici konum paylasmayi kabul etmezse haritayi ankara'ya göre ayarlayacaz
 */

window.navigator.geolocation.getCurrentPosition((e) => {
    // console.log("Kabul etti!", e);
    loadMap([e.coords.latitude, e.coords.longitude], "Mevcut konum");
}, () => {
    console.log("Kabul etmedi!");
    loadMap([55.6761, 12.5683], "Varsayilan konum");
});

//* haritayi yükler:
function loadMap(currentPosition, msg) {
    // console.log(currentPosition);
    // harita kurulumu - merkez belirleme
    let map = L.map("map").setView(currentPosition, 20);

    // haritayi ekrana basar
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // imlec ekleme
    L.marker(currentPosition, { icon: personIcon }).addTo(map).bindPopup(msg);

    // haritada tiklanma olayini izleme
    map.on("click", onMapClick);

    // ekrana daha önce veri var ise bas
    renderNotes();
}
// loadMap();

//* haritaya tiklanma olayinda calisacak fonksiyon:
function onMapClick(e) {
    console.log("Tiklandi", e.latlng);
    // tiklanan noktanin koordinatlarini global degiskene aktar
    clickedCoords = [e.latlng.lat, e.latlng.lng];

    // aside elementine add clasini ekle
    ui.aside.className = "add";

};

//* iptal butonuna tiklaninca:
ui.cancelBtn.addEventListener("click", () => {
    // aside elementinden add clasini kaldir
    ui.aside.className = "";
})

// form gönderilince:
ui.form.addEventListener("submit", (e) => {
    // sayfa yenilenmesini engelle
    e.preventDefault();

    // inputlardaki verilere eris
    console.dir(e.target); // etiket bilgisi degil de nesne bilgisini verir

    const title = e.target[0].value;
    const date = e.target[1].value;
    const status = e.target[2].value;

    // yeni bir nesne olustur
    // console.log(title, date, status);

    const newNote = {
        // id daha sonra 'delete' icin dinamik olarak güncelle (güncellendi!)
        id: new Date().getTime(),
        title,
        date,
        status,
        clickedCoords,
    }

    // console.log(newNote);

    notes.unshift(newNote); // son veriyi listenin basina ekler
    console.log(notes);

    // nesneyi global degiskene kaydet

    // localstorage'i güncelle
    // setItem: sadece string verileri kaydeder. notes bir dizi setidir!
    localStorage.setItem("notes", JSON.stringify(notes));

    // aside alanindan "add" classini kaldir
    ui.aside.className = "";

    // yeni eklenen notun ekrana basilmasi icin tekrar renderla, böylece sayfa yenilenmeden yeni eklenen not ekrana basilir
    renderNotes();
})

//* ekrana notlari bas:
function renderNotes() {
    const noteCards = notes.map((item) => `
    
            <li data-id="${item.id}">
            <div>
                <p>${item.title}</p>
                <p>${item.date}</p>
                <p>${item.status}</p>
            </div>

            <div class="icons">
                <i class="bi bi-airplane-fill" id="fly"></i>
                <i class="bi bi-trash-fill" id="delete"></i>
            </div>
        </li>
    
    `).join("");

    // join: diziyi stringe cevirir
    // console.log(noteCards);

    ui.list.innerHTML = noteCards;
};
