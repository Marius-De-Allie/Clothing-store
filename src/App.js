import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

const ShopPage = () => (
  <h1>SHOP PAGE</h1>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/:category" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
