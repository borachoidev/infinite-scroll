import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useDetail from '../hooks/useDetail';
import Button from '../components/Button';
import styled from 'styled-components';

const Section = styled.section`
  width: 1000px;
  max-width: 100%;
  margin: 5rem auto;
`;

const Article = styled.article`
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: #eae9e8 1px solid;
  margin: 2rem 0;
`;

const HeaderOne = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
`;
function Detail() {
  const { id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useDetail(id);
  return (
    <Section>
      <Article>
        <HeaderOne>{data.title}</HeaderOne>
        <p>{data.content}</p>
        {loading && 'Loading...'}
        {error && 'Error!'}
      </Article>
      <Button type="button" onClick={() => history.push('/')}>
        뒤로가기
      </Button>
    </Section>
  );
}

export default Detail;
