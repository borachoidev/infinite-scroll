import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;
const List = styled.li`
  list-style: none;
  padding: 15px;
  &:hover {
    background-color: #fcf8f2;
  }
`;
const HeaderThree = styled.h3`
  font-weight: normal;
  color: black;
  margin: 5px 0;
`;
const Span = styled.span`
  color: orange;
  margin-right: 5px;
`;

const Paragraph = styled.p`
  margin: 5px 0;
  width: 100%;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

function Article({ id, title, content, innerRef }) {
  return (
    <StyledLink to={{ pathname: `/${id}`, state: { id } }}>
      <List ref={innerRef}>
        <HeaderThree>
          <Span>{id}.</Span>
          {title}
        </HeaderThree>
        <Paragraph>{content}</Paragraph>
      </List>
    </StyledLink>
  );
}

export default Article;
