import React from 'react';
import {
  HeaderThree,
  List,
  Paragraph,
  Span,
  StyledLink,
} from './Article.styles';

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
