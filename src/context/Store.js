import React, { useState } from 'react';
const SearchContext = React.createContext();

const Store = props => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [postType, setPostType] = useState('a');
  const [lists, setLists] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        pageNumber,
        setPageNumber,
        postType,
        setPostType,
        lists,
        setLists,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { Store, SearchContext };
