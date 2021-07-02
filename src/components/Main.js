import React, {
  useRef,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import Article from './Article';
import Skeleton from './Skeleton';
import { List, StyledMain } from './Main.styles';
import { SearchContext } from '../context/Store';
import { fetchList } from '../api/axios';
import Nav from './Nav';

function Main() {
  const { pageNumber, setPageNumber, query, lists, setLists, postType } =
    useContext(SearchContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    async function fetchAndSetList() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetchList(query, pageNumber, postType);
        setLists(prevLists => {
          return [...new Set([...prevLists, ...response.data])];
        });
        setHasMore(response.data.length > 0);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    }
    fetchAndSetList();
  }, [query, pageNumber, postType]);
  useEffect(() => {
    setLists([]);
  }, [query, postType]);

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
      <Nav />
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
        {loading && <Skeleton loading={loading} />}
        {error && 'Error!'}
      </List>
    </StyledMain>
  );
}

export default Main;
