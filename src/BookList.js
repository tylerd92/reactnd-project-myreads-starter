import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class BookList extends Component {
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
                    author={book.author} 
                    bookImage={book.thumbnail}
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