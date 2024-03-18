import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Nav from './Nav';

const Map = () => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [circle, setCircle] = useState(null);

    useEffect(() => {
        const initializeMap = () => {
            const leafletMap = L.map('map').setView([0, 0], 6);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(leafletMap);
            setMap(leafletMap);
        };

        initializeMap();
    }, []);

    useEffect(() => {
        const watchPosition = () => {
            if (!navigator.geolocation) {
                console.log("Your browser doesn't support geolocation feature!");
            } else {
                const id = setInterval(() => {
                    navigator.geolocation.getCurrentPosition(getPosition);
                }, 2000);
                return () => clearInterval(id);
            }
        };

        const getPosition = (position) => {
            const { latitude, longitude, accuracy } = position.coords;

            if (map) {
                setMarker(prevMarker => {
                    if (prevMarker) map.removeLayer(prevMarker);
                    return L.marker([latitude, longitude]);
                });
                setCircle(prevCircle => {
                    if (prevCircle) map.removeLayer(prevCircle);
                    return L.circle([latitude, longitude], { radius: accuracy });
                });
            } else {
                console.log("Map is not initialized yet.");
            }
        };

        watchPosition();
    }, [map]);

    useEffect(() => {
        if (map && marker && circle) {
            marker.addTo(map);
            circle.addTo(map);

            const featureGroup = L.featureGroup([marker, circle]).addTo(map);
            map.fitBounds(featureGroup.getBounds());
        }
    }, [map, marker, circle]);

    return (
        <>
            <Nav />
            <div id="map" style={{ width: '100%', height: '100vh' }}></div>
        </>
    )
};

export default Map;