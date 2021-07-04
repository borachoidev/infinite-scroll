import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input, InputContainer } from './Search.styles';
import useDebounce from '../hooks/useDebounce';

function Search({ setQuery, setPageNumber }) {
  const search = useRef(null);
  const [beforeDebounced, setBeforeDbounced] = useState('');
  const query = useDebounce(beforeDebounced, 150);
  function handleSearch(e) {
    setBeforeDbounced(e.target.value);
    setPageNumber(0);
  }
  useEffect(() => {
    setQuery(query);
  }, [query]);

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
        value={beforeDebounced}
        placeholder="검색어를 입력하세요"
        onChange={handleSearch}
      />
    </InputContainer>
  );
}

export default Search;
