import React from 'react';
import styled, { css, keyframes } from 'styled-components';
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
const List = styled.li`
  display: ${props => (props.loading ? 'block' : 'none')};
  padding: 15px;
  width: 950px;
  height: 100px;
`;
const HeaderThree = styled.div`
  display: ${props => (props.loading ? 'block' : 'none')};
  background-color: ${props => (props.loading ? '#ccc' : 'none')};
  margin: 5px 0;
  width: 100%;
  height: 25px;
  ${props =>
    props.loading &&
    css`
      animation: ${skeleton} 1s infinite ease-in-out;
    `}
`;

const Paragraph = styled.div`
  display: ${props => (props.loading ? 'block' : 'none')};
  background-color: ${props => (props.loading ? '#ccc' : 'none')};
  width: 100%;
  height: 80px;
  ${props =>
    props.loading &&
    css`
      animation: ${skeleton} 1s infinite ease-in-out;
    `}
`;
function Skeleton({ loading }) {
  return (
    <List loading={loading}>
      <HeaderThree loading={loading}>{''}</HeaderThree>
      <Paragraph loading={loading}>{''}</Paragraph>
    </List>
  );
}

export default Skeleton;
