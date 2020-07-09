import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchResults: []
    }
    this.getBooksByQuery = this.getBooksByQuery.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.getAllBooks = this.getAllBooks.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getBooksByQuery(query) {
    BooksAPI.search(query)
    .then((results) => {
      let filterResults = results.length > 0 ? results.filter((res) => res.imageLinks !== undefined) : [];
      this.setState(() => ({
        searchResults: filterResults
      }));
    });
  }

  updateBook(books, bookUpdated, newStatus) {
    BooksAPI.update(bookUpdated, newStatus)
      .then();
     this.setState({books});
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }));
      });
  }

  render() {
    return (
      <div className="app">
        <div>
          <Route 
            exact path='/'
            render={() => (
              <MyReads 
                books={this.state.books} 
                getBooks={this.getAllBooks}
                updateBook={this.updateBook} 
              />
            )}
          />
          <Route 
            path='/search'
            render={({ history }) => (
              <BookSearch 
                books={this.state.searchResults}
                onSearchBooks={this.getBooksByQuery} 
                onUpdateBook={(books, bookUpdated, newStatus) => {
                  this.updateBook(books, bookUpdated, newStatus)
                  history.push('/')
                }}
              />
            )}
          />
        </div>
      </div>
    )
  }
}

export default BooksApp
