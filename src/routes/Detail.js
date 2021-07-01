import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useDetail from '../hooks/useDetail';

function Detail(props) {
  const { id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useDetail(id);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      {loading && 'Loading...'}
      {error && 'Error!'}
      <button type="button" onClick={() => history.push('/')}>
        뒤로가기
      </button>
    </div>
  );
}

export default Detail;
