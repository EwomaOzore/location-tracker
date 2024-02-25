import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faGears, faMapLocationDot, faSliders } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/tracking.jpg';
import profile from '../images/profile.jpg';
import '../App.css';

function Nav() {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='nav-button'>
                <Link to='/map' className='btn' title='Map'>
                    <FontAwesomeIcon icon={faMapLocationDot} size='lg' />
                </Link>
                <Link to='/history' className='btn' title='History'>
                    <FontAwesomeIcon icon={faClockRotateLeft} size='lg' />
                </Link>
                <Link to='/preferences' className='btn' title='Preferences'>
                    <FontAwesomeIcon icon={faSliders} size='lg' />
                </Link>
                <Link to='/settings' className='btn' title='Settings'>
                    <FontAwesomeIcon icon={faGears} size='lg' />
                </Link>
            </div>
            <div className='profile'>
                <img src={profile} alt='Profile' />
            </div>
        </div>
    );
}

export default Nav;