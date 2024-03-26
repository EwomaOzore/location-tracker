import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import Settings from './components/Settings';
import Preferences from './components/Preferences';
import History from './components/History';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/map' element={<Map onLocationChange={handleLocationChange} />} />
          <Route path='/history' element={<History latitude={location.latitude} longitude={location.longitude} />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;