function loadMap() {

    // harita kurulumu - merkez belirleme
    let map = L.map("map").setView([51.505, -0.09], 13);

    // haritayi ekrana basar
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // imlec ekleme
    L.marker([51.505, -0.09]).addTo(map);
}

loadMap();