import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {
    const position = [49.2859, -123.1112]; // Waterfront

    const polyline = [
        [49.2859, -123.1112], // Waterfront
        [49.2856, -123.1202], // Burrard
        [49.2833, -123.1161], // Granville
        [49.2796, -123.1098], // Station-Chinatown
        [49.2732, -123.1003], // Main Street - Science World 
        [49.2626, -123.0692], // Commerical-Broadway
        [49.2483, -123.0559], // Nanaimo 
        [49.2443, -123.0461], // 29th Ave
        [49.2384, -123.0318], // Joyce-Collingwood
        [49.2298, -123.0127], // Patterson
        [49.2258, -123.0039], // Metrotown
        [49.2201, -122.9885], // Royal Oak
        [49.2123, -122.9592], // Edmonds
        [49.2000, -122.9490], // 22nd Street
        [49.2015, -122.9126], // New Westminster
        // Expo Line Splits
    ]

    const purpleOption = { color: 'purple' }
    const redOption = { color: 'red' }


    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Skytrain. <br /> Waterfront.
                </Popup>
            </Marker>

            <CircleMarker center={[49.27450, -123.12189]} pathOptions={redOption} radius={20}>
                <Popup>
                    You've reached your destination!
                </Popup>
            </CircleMarker>

            <Polyline pathOptions={purpleOption} positions={polyline} />
        </MapContainer>
    )
}