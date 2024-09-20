import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header-container'>
        <div className='nav-logo'>
            <h1>Journy</h1>
        </div>
        <div class="nav-buttons">
            <button class="write-button" onclick="window.location.href='create-post.html';">Write</button>
            <button class="login-button" onclick="window.location.href='login.html';">Login</button>
            <button class="signup-button" onclick="window.location.href='register.html';">Sign-Up</button>
            <img class="nav-img" src="/profile.jpg" onclick="window.location.href='home.html';" />
        </div>
    </div>
  )
}
