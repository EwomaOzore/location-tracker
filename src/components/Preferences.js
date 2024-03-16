import React from 'react';
import Nav from './Nav';

function Preferences() {
    return (
        <>
            <Nav />
            <div className='content'>
                <h2>Preferences</h2>
                <p>This is the preferences page. Set your preferences for the app here.</p>
            </div>
        </>
    );
}

export default Preferences;