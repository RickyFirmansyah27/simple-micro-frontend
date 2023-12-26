import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Tabs from './Tabs';

const Feature1 = lazy(() => import('feature/Feature1'));
const Feature2 = lazy(() => import('feature/Feature2'));
const Feature3 = lazy(() => import('feature/Feature3'));

const TABS = {
  Feature1: { text: 'Feature1' },
  'Feature2': { text: 'Feature2' },
  'Feature3': { text: 'Feature3' },
};

export default function App() {
  const [activeTab, setActiveTab] = useState(Object.keys(TABS)[0]);

  const renderTab = () => {
    switch (activeTab) {
      case 'Feature1':
        return <Feature1 />;
      case 'Feature2':
        return <Feature2 />;
      case 'Feature3':
        return <Feature3 />;
      default:
        return null;
    }
  };

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
      <div style={{ fontSize: '20px' }}>
        <h2>Shell App</h2>
      </div>
      <Tabs tabs={TABS} onSelect={handleTabSelect} />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {renderTab()}
        </Suspense>
      </div>
    </div>
  );
}
