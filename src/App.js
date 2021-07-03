import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from './context/Store';
import Detail from './routes/Detail';
import Home from './routes/Home';

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
