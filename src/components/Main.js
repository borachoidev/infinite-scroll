import React, { useRef, useCallback } from 'react';
import Article from './Article';
import Skeleton from './Skeleton';
import { List, StyledMain } from './Main.styles';
import Nav from './Nav';
import { useHistory } from 'react-router';
import useSearch from '../hooks/useSearch';


function Main({ pageNumbers, query, postTypes }) {
  const [pageNumber, setPageNumber] = pageNumbers;
  const [postType, setPostType] = postTypes;
  const history = useHistory;

  const { lists, loading, error, hasMore } = useSearch(
    query,
    pageNumber,
    history,
    postType
  );

  // 마지막게시물 추적
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
      <Nav postTypes={postTypes} setPageNumber={setPageNumber} />
      <List>
        {lists.map((list, index) => {
          if (lists.length === index + 1) {
            return (
              <Article
                innerRef={lastListElementRef}
                key={list.id}
                id={list.id}
                title={list.title}
                content={list.content}
                postType={postType}
              />
            );
          } else {
            return (
              <Article
                key={list.id}
                id={list.id}
                title={list.title}
                content={list.content}
                postType={postType}
              />
            );
          }
        })}
        {loading && <Skeleton loading={loading} />}
        {error && 'Error!'}
      </List>
    </StyledMain>
  );
}

export default Main;
