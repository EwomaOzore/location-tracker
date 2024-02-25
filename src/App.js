import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Routes>
          <Route path='/map' component={Map} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
