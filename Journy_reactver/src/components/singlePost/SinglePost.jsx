import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div class="singlePost-container" onclick="window.location.href='post.html';">
        <div class="singlePost-contents">
            <h1 class="singlePost-title">Hello</h1>
            <p class="singlePost-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p class="singlePost-date">Sep 4, 2024</p>
        </div>    
        <div class="singlePost-image">
            <img class="singlePost-img" src="public/greenery.jpg" />
        </div>
    </div>
  )
}
