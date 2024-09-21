import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='nav-logo'>
        <Link to="/" className='link'>
          <h1>Journy</h1>
        </Link>
      </div>
      <div class="nav-buttons">
        <Link to="/create-post">
          <button class="write-button">Write</button>
        </Link>
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
