import React from 'react';
import { Button, StyledNav } from './Nav.styles';

function Nav({ postTypes, setPageNumber }) {
  const [postType, setPostType] = postTypes;
  const handleClick = e => {
    const type = e.target.dataset.type;
    setPostType(type);
    setPageNumber(0);
  };
  return (
    <StyledNav>
      <Button
        type="button"
        styleComponentProp={postType === 'a' ? 'true' : ''}
        onClick={handleClick}
        data-type="a"
      >
        A Posts
      </Button>
      <Button
        type="button"
        styleComponentProp={postType === 'b' ? 'true' : ''}
        onClick={handleClick}
        data-type="b"
      >
        B Posts
      </Button>
    </StyledNav>
  );
}

export default Nav;
