import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;
export const List = styled.li`
  list-style: none;
  padding: 15px;
  &:hover {
    background-color: #fcf8f2;
  }
`;
export const HeaderThree = styled.h3`
  font-weight: normal;
  color: black;
  margin: 5px 0;
`;
export const Span = styled.span`
  color: orange;
  margin-right: 5px;
`;

export const Paragraph = styled.p`
  margin: 5px 0;
  width: 100%;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
