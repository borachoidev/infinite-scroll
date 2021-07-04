import { useState, useEffect } from 'react';
import { fetchList } from '../api/axios';

function useSearch(query, pageNumber, history, postType) {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    async function fetchAndSetList() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetchList(query, pageNumber, history, postType);
        setLists(prevLists => {
          return [...new Set([...prevLists, ...response.data])];
        });
        setHasMore(response.data.length > 0);
        setLoading(false);
      } catch (e) {
        setError(true);
        console.error(e);
      }
    }
    fetchAndSetList();
  }, [query, pageNumber, postType]);
  useEffect(() => {
    setLists([]);
  }, [query, postType]);
  return { lists, loading, error, hasMore };
}

export default useSearch;
