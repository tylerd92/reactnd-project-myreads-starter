import React, { Component } from 'react';

class Book extends Component {

  handleOptionChange(event) {
    this.props.shelfStatus(this.props.title, event.target.value);
  }
  
  render() {
    const { title, author, bookImage } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.handleOptionChange(event)}>
              <option value="move">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      <div className="book-title">{ title }</div>
      <div className="book-authors">{ author }</div>
      </div>
    );
  }
}

export default Book;