import React from 'react';
import { useAuthDispatch } from '../AuthContext';

function Logout() {
    const authDispatch = useAuthDispatch();

    const handleLogout = () => {
        // Perform logout logic
        // After successful logout, dispatch the LOGOUT action
        authDispatch({ type: 'LOGOUT' });
    };

    return (
        <div>
            {/* ... your logout button or component */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
