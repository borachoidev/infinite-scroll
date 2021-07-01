import React, { useContext, useRef } from 'react';
import { Context } from '../context/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const search = useRef(null);
  const { query, setQuery, setPageNumber } = useContext(Context);
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(0);
  }

  function handleFocus(e) {
    search.current.focus();
  }
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} onClick={handleFocus} />
      <input
        ref={search}
        type="search"
        value={query}
        placeholder="검색어를 입력하세요"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
