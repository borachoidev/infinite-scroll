import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/:type" component={Detail} />
    </BrowserRouter>


  );
}

export default App;
