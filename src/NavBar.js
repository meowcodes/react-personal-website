import React, { Component } from 'react';
import cat from './cat.svg'
// import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>
          <img src={ cat } alt="meow" />
          <p>About</p>
          <p>Experience</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
