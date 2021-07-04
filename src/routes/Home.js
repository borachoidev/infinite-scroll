import React, { useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import { Header, HeaderOne } from './Home.styles';

function Home() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [postType, setPostType] = useState('a');
  return (
    <>
      <Header>
        <HeaderOne>게시물을 검색해보세요</HeaderOne>
        <Search setQuery={setQuery} setPageNumber={setPageNumber} />
      </Header>
      <Main
        query={query}
        pageNumbers={[pageNumber, setPageNumber]}
        postTypes={[postType, setPostType]}
      />
    </>
  );
}

export default Home;
