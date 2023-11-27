import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feature1" element={<Feature1 />} />
        <Route path="/feature2" element={<Feature2 />} />
        <Route path="/feature3" element={<Feature3 />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
