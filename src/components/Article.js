import React, { useContext } from 'react';
import { SearchContext } from '../context/Store';
import {
  HeaderThree,
  List,
  Paragraph,
  Span,
  StyledLink,
} from './Article.styles';

function Article({ id, title, content, innerRef, postType }) {
  return (
    <StyledLink to={{ pathname: `/${postType}`, search: `?id=${id}` }}>
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
