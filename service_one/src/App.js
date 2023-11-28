import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Card from './Card';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
