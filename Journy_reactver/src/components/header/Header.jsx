import React from 'react'
import "./header.css"
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  return (
    <div className='header-container'>
      <div className='nav-logo'>
        <Link to="/" className='link'>
          <h1>Journy</h1>
        </Link>
      </div>
      <div class="nav-buttons">
      {location.pathname !== "/" &&
        <Link to="/create-post">
          <button class="write-button">Write</button>
        </Link>
      }
        <Link to="/login">
          <button class="login-button">Login</button>
        </Link>
        <Link to="/register">
          <button class="signup-button">Sign-Up</button>
        </Link>
        <Link to="/profile"> 
          <img class="nav-img" src="/profile.jpg" />
        </Link>
      </div>
    </div>
  )
}
