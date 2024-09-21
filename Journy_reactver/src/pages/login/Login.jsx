import React from 'react'
import Header from '../../components/header/Header'
import "./login.css"
import Footer from '../../components/footer/Footer'

export default function Login() {
  return (
    <div>
        <Header />
        <hr />
        <div class="login-container">
            <h1 class="login-title">Login</h1>
            <form class="login-form">
                <input type="text" class="login-input" placeholder="Email"/>
                <input type="password" class="login-input" placeholder="Password"/>
                <input class="login-submit" type="submit" />   
            </form>
        </div>
        <hr />
        <Footer />
    </div>
  )
}
