import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 3rem;
  border: 1px solid #c3c1c3;
  padding: 10px;
  border-radius: 4px;
  width: 300px;
  &:focus-within {
    border: 1px solid #ffa500;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  }
`;

export const Input = styled.input`
  border: none;
  padding: 7px;
  margin-left: 5px;
  font-size: 15px;
  &:all {
    border: none;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;
