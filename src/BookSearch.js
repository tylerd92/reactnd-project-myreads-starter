import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import BookSearchResults from './BookSearchResults';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  updateQuery(query) {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
          >
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          {
            this.state.query === '' ? <h2>Search Results Here</h2> : 
            <BookSearchResults searchQuery={this.state.query} onUpdateBook={this.props.onUpdateBook} onSearchBooks={this.props.onSearchBooks} results={this.props.books} />
          }
        </div>
      </div>
    );
  }
}

export default BookSearch;