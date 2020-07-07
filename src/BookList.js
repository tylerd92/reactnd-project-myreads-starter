import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Book from './Book';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render () {
    const { books, shelfTitle, changeShelf } = this.props;
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              
              {books.map((book) => (
                <li key={book.title}>
                  <Book 
                    title={book.title} 
                    authors={book.authors} 
                    bookImage={book.imageLinks.smallThumbnail}
                    shelfStatus={changeShelf}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
    );
  }
}

export default BookList;