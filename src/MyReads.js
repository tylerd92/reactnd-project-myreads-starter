import React from 'react';
import {Link } from 'react-router-dom';
import BookDisplay from './BookDisplay';

const MyReads = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookDisplay 
          books={props.books} 
          getBooks={props.getBooks}
          updateBook={props.updateBook}
        />
      </div>
      <div className="open-search">
        <Link
          to='/search'
        >
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}

export default MyReads;