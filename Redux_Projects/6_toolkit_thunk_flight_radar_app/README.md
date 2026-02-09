# Kütüphaneler

- @reduxjs/toolkit
- react-router-dom
- react-leaflet
- react-paginate
- react-redux
- bootstrap
- leaflet
- axios
- @types/leaflet-rotatedmarker
    -> dahil edilmesi: import 'leaflet-rotatedmarker';

# API

- https://rapidapi.com/apidojo/api/flight-radar1

- her ucagin anlik bilgilerini takip etmek icin; https://www.flightradar24.com/51.47,0.46/6

# Gerçek Zamanlı Veri Çekme

## Fetch + setInterval

- Avantaj:
- Basit
- Geniş Destek
- Kontrol

- Dezavataj:
- Yüksek Maaliyet
- Gecikme
- Aşırıs İstek (veri degismediginde de istek atar)

## Websocket

- Avantaj:
- Gerçek Zamanlı
- Verimli
- Az Gecikme (sadece veri degistiginde istek atar)

- Dezavataj:
- Karmaşık