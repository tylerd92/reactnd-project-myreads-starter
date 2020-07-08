import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
/*
needs some fine tuning
certain search term causes an error
in authors section 
*/
class BookSearchResults extends Component {
  constructor(props) {
    super(props);
    this.handleBookStatus = this.handleBookStatus.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.props.onSearchBooks(this.props.searchQuery)
    }
  }

  handleBookStatus(title, newStatus) {
    let books = [...this.props.results];
    let book = {};
    let indexOfBook = 0;

    for (let i = 0; i < books.length; i++ ) {
      if (books[i].title === title) {
        book = {...books[i]};
        indexOfBook = i;
      }
    }

    book.shelf = newStatus;
    books[indexOfBook] = book;
    this.props.onUpdateBook(books, book, book.shelf);
 }

  render() {
    return (

      <ol className="books-grid">
        {this.props.results.length === 0 ? <h3>No books match search</h3> : this.props.results.map((book) => (
            <Book 
              key={book.id}
              title={book.title} 
              authors={book.authors} 
              bookImage={book.imageLinks.smallThumbnail}
              shelfStatus={this.handleBookStatus}
            />
          ))
        }
      </ol>
    );
  }
}

export default BookSearchResults;