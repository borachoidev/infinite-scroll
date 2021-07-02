import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 1000px;
  padding: 0 40px 0 0;
  border-bottom: #dbd5cc 1px solid;
  margin-bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  width: 60px;
  text-align: center;
  height: 25px;
  color: ${props => (props.styleComponentProp ? 'orange' : 'black')};
  &:hover {
    color: #ffc966;
    background-color: #fcf8f2;
  }
`;
