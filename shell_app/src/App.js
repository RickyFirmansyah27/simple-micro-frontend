import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import komponen dengan React.lazy
const Menu = lazy(() => import('feature/Menu'));
const Feature1 = lazy(() => import('feature/Feature1'));
const Feature2 = lazy(() => import('feature/Feature2'));
const Feature3 = lazy(() => import('feature/Feature3'));

const LoadingFallback = () => (
  <div>Loading...</div>
);


const App = () => {
  return (
    <Router>
      <div>
        <div style={{ fontSize: '20px' }}>
          <h2>Shell App</h2>
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/feature1" element={<Feature1 />} />
            <Route path="/feature2" element={<Feature2 />} />
            <Route path="/feature3" element={<Feature3 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
