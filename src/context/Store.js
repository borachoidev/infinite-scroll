import React, { useState } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
const Context = React.createContext();

const Store = props => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <Context.Provider value={{ query, setQuery, pageNumber, setPageNumber }}>
      {props.children}
    </Context.Provider>
  );
};

export { Store, Context };
