import React from 'react'
import "./post.css"
import Header from '../../components/header/Header'

export default function Post() {
  return (
    <div>
    <Header />
    <hr />
    <div class="main-post-container">
        <h1 class="main-post-title">Hello</h1>
        <div class="main-post-user-container">
            <img class="main-post-user-img" src="public/profile.jpg" />
            <div class="main-post-user-info">
                <span class="main-post-user-name">Sümeyye Sever</span>
                <span class="main-post-time">Sep 4, 2024</span>
            </div>    
        </div>
        <hr />
        
        <div class="main-post-content">
            <p class="main-post">Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Est auctor odio condimentum auctor nostra. Hac sodales tempus enim himenaeos sagittis. 
            Penatibus litora duis ultrices porttitor maximus convallis luctus? Habitasse enim nullam tortor cras; 
            himenaeos finibus lacinia suscipit. Mattis aliquet netus pulvinar; augue rutrum imperdiet habitasse. 
            Nostra convallis blandit egestas penatibus dui mauris potenti et. Urna penatibus enim ante metus felis. 
            Sapien morbi ipsum magnis dis per mollis elementum consequat. Ex himenaeos nostra velit sed amet taciti. 
            Lacinia ex mauris netus porttitor inceptos primis adipiscing. Nascetur semper senectus aliquam imperdiet 
            lacus interdum interdum. Cubilia habitasse congue montes ut ad porttitor! Sociosqu mollis vehicula 
            gravida torquent ornare facilisi luctus. Magnis parturient posuere cursus mollis justo dictum parturient 
            donec platea. Nulla non elit nisl sed eros sodales iaculis tincidunt. Adipiscing sapien integer sagittis 
            dis, volutpat facilisi neque. Luctus tristique varius dui morbi facilisi hac quisque ex cursus. Facilisi 
            maximus ex ac; laoreet malesuada nulla venenatis hac rhoncus.</p>
        </div>
    </div>
      
    </div>
  )
}
