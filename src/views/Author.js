import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <div className="view">
        <h1>Projects</h1>
        <div className="content">
          <div className="content--inner">
            <p className="content--excerpt"></p>
            <p>No data found</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Author
