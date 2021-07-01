import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
