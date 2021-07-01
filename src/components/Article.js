import React from 'react';
import { Link } from 'react-router-dom';
function Article({ id, title, content, innerRef }) {
  return (
    <Link to={{ pathname: `/${id}`, state: { id } }}>
      <li ref={innerRef}>
        <h3>
          <span>{id}</span>
          {title}
        </h3>
        <p>{content}</p>
      </li>
    </Link>
  );
}

export default Article;
