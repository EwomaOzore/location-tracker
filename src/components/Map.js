import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import Nav from './Nav';
import axios from 'axios';

const Map = ({ onLocationChange }) => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [circle, setCircle] = useState(null);

    useEffect(() => {
        const initializeMap = () => {
            const leafletMap = L.map('map').setView([0, 0], 4);
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
                }, 20000);
                return () => clearInterval(id);
            }
        };

        const getPosition = (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            if (map) {
                setMarker(prevMarker => {
                    if (prevMarker) map.removeLayer(prevMarker);
                    return L.marker([latitude, longitude]).addTo(map);
                });
                setCircle(prevCircle => {
                    if (prevCircle) map.removeLayer(prevCircle);
                    return L.circle([latitude, longitude], { radius: accuracy });
                });
                onLocationChange({ latitude, longitude });

                const token = localStorage.getItem('token');

                axios.post('http://localhost:5500/api/location/', { latitude, longitude },
                    {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    .then(response => console.log(response.data))
                    .catch(error => console.error('Error storing location:', error));
            }
        };

        watchPosition();
    }, [map, onLocationChange]);

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
    );
};

export default Map;