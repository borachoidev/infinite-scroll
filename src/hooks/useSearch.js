import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchList } from '../api/axios';

export default function useSearch(query, pageNumber, postType) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lists, setLists] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLists([]);
  }, [query]);

  useEffect(() => {
    async function fetchAndSetList() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetchList(query, pageNumber, 'a-posts');
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
  }, [query, pageNumber]);

  return { loading, error, lists, hasMore };
}
