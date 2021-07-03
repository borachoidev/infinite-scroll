import React, { useContext } from 'react';
import { SearchContext } from '../context/Store';
import { Button, StyledNav } from './Nav.styles';

function Nav() {
  const { postType, setPostType } = useContext(SearchContext);
  const handleClick = e => {
    const type = e.target.dataset.type;
    setPostType(type);
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
