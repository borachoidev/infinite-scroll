import React from 'react';
import Search from './Search';

function Header() {
  return (
    <header>
      <h1>무한 스크롤 </h1>
      <p>게시물을 검색해보세요</p>
      <Search />
    </header>
  );
}

export default Header;
