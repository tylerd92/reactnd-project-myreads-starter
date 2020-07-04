import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <Route 
            exact path='/'
            component={MyReads}
          />
          <Route 
            path='/search'
            component={BookSearch}
          />
        </div>
      </div>
    )
  }
}

export default BooksApp
