import React from 'react'
import Header from '../../components/header/Header'
import SinglePost from "../../components/singlePost/SinglePost"
import AboutCard from '../../components/aboutCard/AboutCard'
import "./profile.css"
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
      <Header />
      <hr />
      <div className='profile-container'>
      <h1 class="profile-name">Sümeyye Sever</h1>
        <Link to="/post" className='link'>
          <div className='profile-posts-container'>
            <SinglePost />
          </div>
        </Link>
        <div className='profile-about-card'>
            <AboutCard />
        </div>
        
      </div>
    </div>
  )
}
