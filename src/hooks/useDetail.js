import { useEffect, useState } from 'react';
import { fetchDetail } from '../api/axios';

export default function useDetail(id, postType) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const type = { a: 'a-posts', b: 'b-posts' };

  useEffect(() => {
    async function fetchAndSetData() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetchDetail(id, type[postType]);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    }

    fetchAndSetData();
  }, [id, postType]);
  return { loading, error, data };
}
