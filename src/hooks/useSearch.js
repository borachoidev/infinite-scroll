import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lists, setLists] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLists([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://recruit-api.yonple.com/recruit/689322/a-posts',
      params: { search: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setLists(prevLists => {
          return [...new Set([...prevLists, ...res.data])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, lists, hasMore };
}
