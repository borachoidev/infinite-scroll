import React from 'react';

function Home(props) {
  return (
    <>
      <header>
        <h1>무한 스크롤</h1>
        <p>게시물을 검색해보세요</p>
        <input type="text" placeholder="검색어를 입력하세요" />
      </header>
      <main>
        <ul>
          <li>
            <h3>
              <span>id</span>
              title
            </h3>
            <p>content</p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Home;
