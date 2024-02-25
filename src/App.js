import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import Nav from './components/Nav';
import Settings from './components/Settings';
import Preferences from './components/Preferences';
import History from './components/History';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Routes>
          <Route path='/map' element={<Map />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;