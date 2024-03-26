import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { useSelector } from 'react-redux';

function History() {
    const [locations, setLocations] = useState([]);

    const token = localStorage.getItem('token');

    const _id = useSelector(state => state.user.user.user._id)
    
    useEffect(() => {
        axios.get(`http://localhost:5500/api/location/${_id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => {
                setLocations(response.data);
            })
            .catch(error => console.error('Error fetching locations:', error));
    }, [token, _id]);


    return (
        <>
            <Nav />
            <div>
                <h2>Location History</h2>
                <ul>
                    {locations.map(location => (
                        <li key={location._id}>
                            Latitude: {location.latitude}, Longitude: {location.longitude}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default History;