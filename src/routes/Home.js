import React from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import { Header, HeaderOne } from './Home.styles';

function Home() {
  return (
    <>
      <Header>
        <HeaderOne>게시물을 검색해보세요</HeaderOne>
        <Search />
      </Header>
      <Main />
    </>
  );
}

export default Home;
