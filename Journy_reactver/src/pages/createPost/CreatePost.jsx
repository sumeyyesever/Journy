import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./createPost.css"

export default function CreatePost() {
  return (
    <div>
      <Header />
      <hr />
      <div class="createPost-container">
        <form class="createPost-form">
            <input class="createPost-title" type="text" placeholder="Title" />
            <textarea class="createPost-textarea"></textarea>
            <input class="createPost-button" type="button" value="Publish"/>
        </form>
      </div>
      <hr />
      <Footer />
    </div>
  )
}
