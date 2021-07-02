import React, { useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5.5rem;
`;

const HeaderOne = styled.h1`
  font-size: 3rem;
  margin: 0.7rem;
  font-weight: normal;
`;
function Home() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <>
      <Header>
        <HeaderOne>게시물을 검색해보세요</HeaderOne>
        <Search queryState={[query, setQuery]} setPageNumber={setPageNumber} />
      </Header>
      <Main pageNum={[pageNumber, setPageNumber]} query={query} />
    </>
  );
}

export default Home;
