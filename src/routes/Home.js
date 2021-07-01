import React from 'react';
import Header from '../components/Header';

function Home(props) {
  return (
    <>
      <Header />
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
