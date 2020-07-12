import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div>
      404: Page not found - <Link to="/">Go to bookshelf</Link>
    </div>
  );
}

export default NotFound;