import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input, InputContainer } from './Search.styles';

function Search({ queryState, setPageNumber }) {
  const search = useRef(null);
  const [query, setQuery] = queryState;
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(0);
  }

  function handleFocus(e) {
    search.current.focus();
  }
  return (
    <InputContainer onClick={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        style={{ color: '#c3c1c3', fontSize: '15px' }}
      />
      <Input
        ref={search}
        type="search"
        value={query}
        placeholder="검색어를 입력하세요"
        onChange={handleSearch}
      />
    </InputContainer>
  );
}

export default Search;
