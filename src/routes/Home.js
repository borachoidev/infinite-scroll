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
`;

function Home(props) {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <>
      <Header>
        <h1>무한 스크롤 </h1>
        <p>게시물을 검색해보세요</p>
        <Search queryState={[query, setQuery]} setPageNumber={setPageNumber} />
      </Header>
      <Main pageNum={[pageNumber, setPageNumber]} query={query} />
    </>
  );
}

export default Home;
