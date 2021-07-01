import React from 'react';
import './App.css';
import { Store } from './context/Store';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Route exact={true} path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </BrowserRouter>
    </Store>
  );
}

export default App;
