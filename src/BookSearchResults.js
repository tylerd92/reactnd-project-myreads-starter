import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class BookSearchResults extends Component {
  state = {
    results: []
  }
  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      BooksAPI.search(this.props.searchQuery)
        .then((books) => {
          this.setState(() => ({
            results: books
          }));
        });
    }
  }

  render() {
    return (

      <ol className="books-grid">
        {this.state.results.length == 0 ? <h3>No books match search</h3> : this.state.results.map((book) => (
          <li key={book.id}>
            {book.title}
          </li>))
          }
      </ol>
    );
  }
}

export default BookSearchResults;