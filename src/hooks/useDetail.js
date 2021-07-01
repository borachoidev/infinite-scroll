import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useDetail(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: 'GET',
      url: `https://recruit-api.yonple.com/recruit/689322/a-posts/${id}`,
    })
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
  }, [id]);
  return { loading, error, data };
}
