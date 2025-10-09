import { personIcon } from "./constants.js";
import ui from "./ui.js";
import getIcon, { getStatus } from "./helpers.js";

// * Global Degiskenler
let map;
// Haritada tiklanilan noktanin koordinati
let clickedCoords;
// ls'da veri alsa al yoksa bos, JSON.parse: string (json) verisini diziye (js) verisine cevirir
let layer; // imlecleri ekleyecegimiz katman
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
    map = L.map("map", {
        zoomControl: false,
    }).setView(currentPosition, 20);

    // zoom control butonunu opsiyonel ekle
    L.control.zoom({
        position: "bottomright",
    }).addTo(map);

    // haritayi ekrana basar
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // haritanin üzerine imlecleri eklemek icin bir katman olusturulmasi lazim
    layer = L.layerGroup().addTo(map);

    // imlec ekleme
    L.marker(currentPosition, { icon: personIcon }).addTo(map).bindPopup(msg);

    // haritada tiklanma olayini izleme
    map.on("click", onMapClick);

    // ekrana daha önce veri var ise bas
    renderNotes();
    renderMarkers();
}
// loadMap();

//* haritaya tiklanma olayinda calisacak fonksiyon:
function onMapClick(e) {
    // console.log("Tiklandi", e.latlng);
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

//* form gönderilince:
ui.form.addEventListener("submit", (e) => {
    // sayfa yenilenmesini engelle
    e.preventDefault();

    // inputlardaki verilere eris
    // console.dir(e.target); // etiket bilgisi degil de nesne bilgisini verir

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
    // console.log(notes);

    // nesneyi global degiskene kaydet

    // localstorage'i güncelle
    // setItem: sadece string verileri kaydeder. notes bir dizi setidir!
    localStorage.setItem("notes", JSON.stringify(notes));

    // aside alanindan "add" classini kaldir
    ui.aside.className = "";

    // formu temizle
    e.target.reset();

    // yeni eklenen notun ekrana basilmasi icin tekrar renderla, böylece sayfa yenilenmeden yeni eklenen not ekrana basilir
    renderNotes();
    renderMarkers();
})

//* ekrana imlecleri bas:
function renderMarkers() {
    // eski imlecleri kaldir (katmandaki markerleri temizle)
    layer.clearLayers();

    notes.forEach((item) => {
        // console.log(item.status);
        // console.log(item);

        // itemin statusune bagli icon belirle
        const icon = getIcon(item.status);
        L.marker(item.clickedCoords, { icon: icon }).addTo(layer).bindPopup(item.title);
    })
}

//* ekrana notlari bas:
function renderNotes() {
    const noteCards = notes.map((item) => {
        // tarihi kullanici dostu formata cevir
        const date = new Date(item.date).toLocaleString("tr", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })

        // status degerini cevir (goto --> ziyaret, home --> ev vb)
        const status = getStatus(item.status);

        // olusturulacak notun html icerigini beirle
        return `
    
            <li>
            <div>
                <p>${item.title}</p>
                <p>${date}</p>
                <p>${status}</p>
            </div>

            <div class="icons">
                <i data-id="${item.id}" class="bi bi-airplane-fill" id="fly"></i>
                <i data-id="${item.id}" class="bi bi-trash-fill" id="delete"></i>
            </div>
        </li>
    
    `}).join("");

    // join: diziyi stringe cevirir
    // console.log(noteCards);

    // notlari liste alaninda renderla
    ui.list.innerHTML = noteCards;

    // delete iconlarini al ve tiklanma olaylarinda delete fonksiyonu calistir
    document.querySelectorAll("li #delete").forEach((btn) => {
        btn.addEventListener("click", () => deleteNote(btn.dataset.id));
    });

    // fly iconlarini al ve tiklanma olaylarinda fly fonksiyonu calistir
    document.querySelectorAll("li #fly").forEach((btn) => {
        btn.addEventListener("click", () => flyToLocation(btn.dataset.id));
    });
};

//* sil butonuna tiklaninca
function deleteNote(id) {
    // console.log(id, "id'li note siliniyor...");
    // console.log(id);
    // console.log(notes);

    // kullaniciya sor
    const res = confirm("Notu silmeyi onayliyor musunuz?");

    // eger onaylarsa notu sil
    if (res) {
        // id'sini bildigimiz elemani diziden sil 
        notes = notes.filter((note) => note.id !== +id);

        // console.log(notes);

        // localstoragei güncelle
        localStorage.setItem("notes", JSON.stringify(notes));

        // güncel notlari ekrana bas
        renderNotes();

        // güncel imlecleri ekrana bas
        renderMarkers();

    };
};

//* ucus butonuna tiklaninca
function flyToLocation(id) {
    // console.log(id, "id'li locatina uculuyor...");
    // console.log(notes);

    // idsi bilinen elemani dizide bul
    const note = notes.find((note) => note.id === +id);

    // notun koordinatlarina uc
    // console.log(note.clickedCoords);
    map.flyTo(note.clickedCoords, 15);
};

//* tiklanma olayinda:
// aside alanindaki form veya liste icerigini gizlemek icin hide classi ekle
ui.arrow.addEventListener("click", () => {
    // console.log("tiklandi");
    ui.aside.classList.toggle("hide");
})
