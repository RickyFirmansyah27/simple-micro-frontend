import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Menu = lazy(() => import('./feature/Menu'));
const Feature1 = lazy(() => import('./feature/Feature1'));
const Feature2 = lazy(() => import('./feature/Feature2'));
const Feature3 = lazy(() => import('./feature/Feature3'));


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
          <Switch>
            <Route path="/" exact>
              <Menu />
            </Route>
            <Route path="/feature1">
              <Feature1 />
            </Route>
            <Route path="/feature2">
              <Feature2 />
            </Route>
            <Route path="/feature3">
              <Feature3 />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
