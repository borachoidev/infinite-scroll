import React, { useRef, useCallback } from 'react';
import Article from './Article';
import useSearch from '../hooks/useSearch';
import styled from 'styled-components';
import Skeleton from './Skeleton';

const StyledMain = styled.main`
  width: 1000px;
  margin: auto;
`;

const List = styled.ul`
  border: #dbd5cc 1px solid;
  border-radius: 7px;
  box-shadow: 0px 0px 13px rgba(219, 213, 204, 0.3) inset;
  width: 100%;
  padding: 20px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function Main({ pageNum, query }) {
  const [pageNumber, setPageNumber] = pageNum;
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
    <StyledMain>
      <List>
        {loading &&
          [...Array(10)].map((n, idx) => (
            <Skeleton key={idx} loading={loading} />
          ))}
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
        {error && 'Error!'}
      </List>
    </StyledMain>
  );
}

export default Main;
