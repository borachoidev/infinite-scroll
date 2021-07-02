import styled, { keyframes, css } from 'styled-components';

export const Section = styled.section`
  width: 1000px;
  max-width: 100%;
  margin: 5rem auto;
`;

export const Article = styled.article`
  background-color: ${props => (props.loading ? '#ccc' : 'none')};
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: #eae9e8 1px solid;
  margin: 2rem 0;
`;

export const skeleton = keyframes` 
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }`;
export const HeaderOne = styled.h1`
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

export const Paragraph = styled.p`
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

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  background: #ffa500;
  &:hover {
    background: #ffb732;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: #e59400;
  }
`;
