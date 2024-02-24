import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faGears, faSliders } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/tracking.jpg'
import profile from '../images/profile.jpg'

function Nav() {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='nav-button'>
                <div className='btn'>
                    <FontAwesomeIcon icon={faClockRotateLeft} size='lg' />
                </div>
                <div className='btn'>
                    <FontAwesomeIcon icon={faSliders} size='lg' />
                </div>
                <div className='btn'>
                    <FontAwesomeIcon icon={faGears} size='lg' />
                </div>
            </div>
            <div className='profile'>
                <img src={profile} alt='Profile' />
            </div>
        </div>
    );
};

export default Nav;