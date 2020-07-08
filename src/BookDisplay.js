import React, { Component } from 'react';
import BookList from './BookList';

class BookDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleBookStatus = this.handleBookStatus.bind(this);
  }
  
  componentDidMount() {
    this.props.getBooks();
  }

  handleBookStatus(title, newStatus) {
     let books = [...this.props.books];
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
     this.props.updateBook(books, book, book.shelf);
  }
  
  handleAddBook(book) {
    this.setState((prevState) => ({
      books: prevState.books.concat([book])
    }));
  }

  render () {
    return (
      <div>
        <BookList books={this.props.books.filter((b) => b.shelf === 'currentlyReading')} shelfTitle={"Currently Reading"} changeShelf={this.handleBookStatus} />
        <BookList books={this.props.books.filter((b) => b.shelf === 'wantToRead')} shelfTitle={"Want to Read"} changeShelf={this.handleBookStatus} />
        <BookList books={this.props.books.filter((b) => b.shelf === 'read')} shelfTitle={"Read"} changeShelf={this.handleBookStatus} />
      </div>
    );
  }
}

export default BookDisplay;