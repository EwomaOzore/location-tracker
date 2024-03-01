import React from 'react';
import '../styles/Profile.css'

function Profile() {
    const userData = {
        username: 'JohnDoe',
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        totalDistance: '123.45 km',
        totalDuration: '12 hours',
        lastLocation: 'Latitude: 40.7128, Longitude: -74.0060',
    };

    return (
        <div className='profile-container'>
            <div className='profile-header'>
                <img src={userData.profilePicture} alt='Profile' className='profile-picture' />
                <div className='profile-info'>
                    <h2>{userData.fullName}</h2>
                    <p>@{userData.username}</p>
                </div>
            </div>
            <div className='profile-details'>
                <div className='detail'>
                    <h3>Email</h3>
                    <p>{userData.email}</p>
                </div>
                <div className='detail'>
                    <h3>Bio</h3>
                    <p>{userData.bio}</p>
                </div>
                <div className='detail'>
                    <h3>Total Distance Tracked</h3>
                    <p>{userData.totalDistance}</p>
                </div>
                <div className='detail'>
                    <h3>Total Duration Tracked</h3>
                    <p>{userData.totalDuration}</p>
                </div>
                <div className='detail'>
                    <h3>Last Tracked Location</h3>
                    <p>{userData.lastLocation}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;