import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import Nav from './Nav';
import axios from 'axios';

function Profile() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5500/api/profile/')
            .then(response => {
                setUserData(response.data.user);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
            });
    }, []);

    return (
        <>
            <Nav />
            <div className='profile-container'>
                <div className='profile-header'>
                    <img src={userData.profilePicture} alt='Profile' className='profile-picture' />
                    <div className='profile-info'>
                        <h2>{userData.firstName}</h2><h2>{userData.lastName}</h2>
                        <p>@{userData.username}</p>
                    </div>
                </div>
                <div className='profile-details'>
                    <div className='detail'>
                        <h3>Email</h3>
                        <p>{userData.email}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;