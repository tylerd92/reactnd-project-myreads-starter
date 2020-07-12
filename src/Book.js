import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    bookImage: PropTypes.string.isRequired,
    shelf: PropTypes.string,
    shelfStatus: PropTypes.func.isRequired
  }

  handleOptionChange(event) {
    this.props.shelfStatus(this.props.title, event.target.value);
  }
  
  render() {
    const { title, authors, bookImage } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.props.shelf !== undefined ? this.props.shelf : "none"} 
              onChange={(event) => this.handleOptionChange(event)}
            >
              <option value="move">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ title }</div>
        <div className="book-authors">
          {typeof authors === 'undefined' ? <p>Unknown</p> :  authors.map((author) => <p key={author}>{author}</p>)}
        </div>
        
      </div>
    );
  }
}

export default Book;