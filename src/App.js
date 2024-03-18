import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import Settings from './components/Settings';
import Preferences from './components/Preferences';
import History from './components/History';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/map' element={<Map />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;