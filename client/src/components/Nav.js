import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav className="navbar">
      <div className="main-heading">
        <img className="logo"src={require('../images/PL_logo.png')} alt="logo"></img>
        <h1 className="main-title">Rob's Premier League Football Ground Guide</h1>
      </div>
      <ul>
        <Link to="/"><li className="nav-link">Home</li></Link>
      </ul>
    </nav>
    </>
  )
}

export default Nav