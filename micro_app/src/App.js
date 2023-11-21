import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Menu />} />

            <Route path="/menu1" element={<Feature1 />} />
            <Route path="/menu2" element={<Feature2 />} />
            <Route path="/menu3" element={<Feature3 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
