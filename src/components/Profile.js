import React from 'react';
import '../styles/Profile.css';
import Nav from './Nav';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector(state => state.user.user.user)

    return (
        <>
            <Nav />
            {user ? (
                <>
                    <div className='profile-container'>
                        <div className='profile-header'>
                            <img src={user.profilePicture} alt='Profile' className='profile-picture' />
                            <div className='profile-info'>
                                <h2>{user.firstName} {user.lastName}</h2>
                                <p>@ {user.username}</p>
                            </div>
                        </div>
                        <div className='profile-details'>
                            <div className='detail'>
                                <h3>Email</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default Profile;