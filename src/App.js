import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'
import NotFound from './NotFound'

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
    this.getBookIndex = this.getBookIndex.bind(this);
    this.addShelfToResult = this.addShelfToResult.bind(this);
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

  getBookIndex(abook) {
    for (let i = 0; i < this.state.books.length; i++) {
      if (abook.id === this.state.books[i].id) {
        return i;
      }
    }
    return NaN;
  }

  addShelfToResult(abook) {
    const index = this.getBookIndex(abook);
    if (!isNaN(index)) {
      return { ...abook, shelf: this.state.books[index].shelf };
    }
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
                books={this.state.searchResults.map((result) => (
                    this.state.books.filter((book) => (book.id === result.id)).length > 0 ? 
                    this.addShelfToResult(result) : { ...result, shelf: 'none'}
                ))}
                onSearchBooks={this.getBooksByQuery} 
                onUpdateBook={(books, bookUpdated, newStatus) => {
                  this.updateBook(books, bookUpdated, newStatus)
                  history.push('/')
                }}
              />
            )}
          />
          <Route component={NotFound} />
        </div>
      </div>
    )
  }
}

export default BooksApp
