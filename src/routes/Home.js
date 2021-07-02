import React, { useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import { Header, HeaderOne } from './Home.styles';

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
