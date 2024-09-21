import React from 'react'
import "./aboutCard.css"
import FollowingCard from '../followingCard/FollowingCard'

export default function AboutCard() {
  return (

    <div class="aboutCard-container">
            <div class="aboutCard-profile">
                <img class="aboutCard-img" src="public/profile.jpg" />
                <p class="aboutCard-name">Sümeyye Sever</p>
                <p class="aboutCard-followers">100 Followers</p>
                <p class="aboutCard-par">Some words in here❤️</p>
            </div>
            <div class="aboutCard-buttons">
                <button class="aboutCard-follow">Follow</button>
                <button class="aboutCard-msg">Message</button>
            </div>
            <FollowingCard />
        </div>

  )
}
