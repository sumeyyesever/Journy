import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./home.css"

export default function Home() {
  return (
    <div>
      <Header />
      <hr />
      <div className='home-container'>
        <div className='home-titles'>
            <h1 className='home-h1'>Your Online Journal</h1>
            <h3 className='home-h3'>Write whatever you want, read whichever post you can reach</h3>
        </div>
        <img className='home-img' src='/journy-main.png' />
      </div>
      <hr />
      <Footer />
    </div>
  )
}
