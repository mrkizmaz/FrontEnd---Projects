import React from 'react'
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useDispatch, useSelector } from 'react-redux'
import L, { icon } from "leaflet"
import { clearRoute } from '../redux/slices/detailSlice'

// bu kütüphane import edildiginde hata veriyor :/
// import 'leaflet-rotatedmarker';

const Map = ({ setDetailId }) => {

    const { flights } = useSelector((store) => store.flight);
    const { route } = useSelector((store) => store.detail);

    const dispatch = useDispatch();
    // console.log(flights);

    // custom imlec ikonu olustur
    /*
     const planeIcon = icon({
        iconUrl: "plane_icon.png",
        iconSize: [30, 30],
    });
     */

    return (
        <MapContainer center={[52.52, 13.40]} zoom={6} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {flights.map((flight) => {

                // iconu özellestir - rotasyonu belirle

                const icon = L.divIcon({
                    html: `<div style="transform: rotate(${flight.deg - 45}deg)">
                         <img src="/plane_icon.png" alt='plane' style="width:30px; height:30px;" />
                         </div>`,
                    className: "", // arka plandaki classlari (beyazligi) iptal eder
                    iconSize: [30, 30],
                });

                return (
                    <Marker
                        key={flight.id}
                        position={[flight.lat, flight.lng]}
                        icon={icon}>
                        <Popup>
                            <div className='popup'>
                                <span>Kod: {flight.code}</span>
                                <button onClick={() => setDetailId(flight.id)}>Detay</button>
                                {
                                    route.length > 1 && (
                                        <button onClick={() => dispatch(clearRoute())}>Clear Route</button>
                                    )
                                }
                            </div>
                        </Popup>
                    </Marker>
                )
            }
            )}

            {route && <Polyline positions={route} />}
        </MapContainer>
    )
}

export default Map