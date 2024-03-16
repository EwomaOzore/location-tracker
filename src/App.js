import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import Settings from './components/Settings';
import Preferences from './components/Preferences';
import History from './components/History';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className={authenticated ? 'app-container' : 'auth-container'}>
        <Routes>
          <Route path='/login' element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path='/signup' element={<Signup />} />
          {authenticated ? (
            <>
              <Route path='/map' element={<Map />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/preferences' element={<Preferences />} />
              <Route path='/history' element={<History />} />
              <Route path='/profile' element={<Profile />} />
            </>
          ) : (
            <Route index element={<Navigate to='/login' />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;