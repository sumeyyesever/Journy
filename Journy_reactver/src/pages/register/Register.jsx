import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./register.css"

export default function Register() {
  return (
    <div>
        <Header />
        <hr />
        <div class="register-container">
            <h1 class="register-title">Register</h1>
            <form class="register-form">
                <input type="text" class="register-input" placeholder="Username"/>
                <input type="text" class="register-input" placeholder="Email"/>
                <input type="password" class="register-input" placeholder="Password"/>
                <input type="password" class="register-input" placeholder="Password"/>
                <input class="register-submit" type="submit" />   
            </form>
        </div>
        <hr />
        <Footer />
    </div>
  )
}
