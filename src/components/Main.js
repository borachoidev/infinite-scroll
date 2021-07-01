import React, { useContext, useRef, useCallback } from 'react';
import Article from './Article';
import useSearch from '../hooks/useSearch';
import { Context } from '../context/Store';

function Main() {
  const { query, pageNumber, setPageNumber } = useContext(Context);
  const { loading, error, lists, hasMore } = useSearch(query, pageNumber);

  const observer = useRef(null);
  const lastListElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <main>
      <ul>
        {lists.map((list, index) => {
          if (lists.length === index + 1) {
            return (
              <Article
                innerRef={lastListElementRef}
                key={list.id}
                id={list.id}
                title={list.title}
                content={list.content}
              />
            );
          } else {
            return (
              <Article
                key={list.id}
                id={list.id}
                title={list.title}
                content={list.content}
              />
            );
          }
        })}
        {loading && 'Loading...'}
        {error && 'Error!'}
      </ul>
    </main>
  );
}

export default Main;
