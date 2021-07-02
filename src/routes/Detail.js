import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useDetail from '../hooks/useDetail';
import Button from '../components/Button';
import styled, { keyframes, css } from 'styled-components';

const Section = styled.section`
  width: 1000px;
  max-width: 100%;
  margin: 5rem auto;
`;

const Article = styled.article`
  background-color: ${props => (props.loading ? '#ccc' : 'none')};
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: #eae9e8 1px solid;
  margin: 2rem 0;
`;

const skeleton = keyframes` 
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }`;
const HeaderOne = styled.h1`
  background-color: ${props => (props.loading ? '#ccc' : 'none')};
  border-radius: 5px;
  width: 100%;
  min-height: 36px;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  ${props =>
    props.loading &&
    css`
      animation: ${skeleton} 1s infinite ease-in-out;
    `}
`;

const Paragraph = styled.p`
  background-color: ${props => (props.loading ? '#ccc' : 'none')};
  border-radius: 5px;
  width: 100%;
  height: 100px;
  ${props =>
    props.loading &&
    css`
      animation: ${skeleton} 1s infinite ease-in-out;
    `}
`;

function Detail() {
  const { id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useDetail(id);
  return (
    <Section>
      <Article>
        <HeaderOne loading={loading}>{data.title}</HeaderOne>
        <Paragraph loading={loading}>{data.content}</Paragraph>
        {error && 'Error!'}
      </Article>
      <Button type="button" onClick={() => history.push('/')}>
        뒤로가기
      </Button>
    </Section>
  );
}

export default Detail;
