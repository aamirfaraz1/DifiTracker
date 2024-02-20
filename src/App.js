import React from 'react';
import Home from './screens/Home'
import Trackinglist from './screens/Trackinglist'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/trackinglist" element={<Trackinglist />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
