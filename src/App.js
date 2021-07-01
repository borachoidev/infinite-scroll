import React from 'react';
import './App.css';
import { Store } from './context/Store';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Route exact={true} path="/" component={Home} />
        <Route path="/:type" component={Detail} />
      </BrowserRouter>
    </Store>
  );
}

export default App;
