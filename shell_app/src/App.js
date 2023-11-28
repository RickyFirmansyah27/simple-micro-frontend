import React, { useState, lazy, Suspense } from 'react';
import './App.css';
const Feature1 = lazy(() => import('feature/Feature1'));
const Feature2 = lazy(() => import('feature/Feature2'));
const Feature3 = lazy(() => import('feature/Feature3'));

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  const renderTab = () => {
    switch (activeTab) {
      case 1:
        return <Feature1 />;
      case 2:
        return <Feature2 />;
      case 3:
        return <Feature3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ fontSize: '20px' }}>
        <h2>Shell App</h2>
      </div>
      <div>
        <div className="tab-buttons">
          <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>Feature 1</button>
          <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>Feature 2</button>
          <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>Feature 3</button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {renderTab()}
        </Suspense>
      </div>
    </div>
  );
}
