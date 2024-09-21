import React from 'react'
import "./followingCard.css"

export default function FollowingCard() {
  return (
    <div class="followingCard-container">
        <p class="followingCard-title">Following</p>
        <div class="followingCard-person">
            <img class="followingCard-img" src="public/following.png" />
            <p class="followingCard-name">Jane Doe</p>
        </div>
    </div>
  )
}
