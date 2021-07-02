import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 3rem;
  border: 1px solid #c3c1c3;
  padding: 10px;
  border-radius: 4px;
  width: 300px;
  &:focus-within {
    border: 1px solid #ffa500;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  }
`;

const Input = styled.input`
  border: none;
  padding: 7px;
  margin-left: 5px;
  font-size: 15px;
  &:all {
    border: none;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;

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
