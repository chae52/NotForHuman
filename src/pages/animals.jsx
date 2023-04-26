import Header from '../components/Header'
import React, { useState } from 'react'
import dummyData from './data.jsx'
import '../pages/css/mainList.css'

const Animals = (data, setData) => {
  
  const posts = dummyData

  function postDetail(id) {
    window.location.href = '/detail/' + id
  }

  function postWrite() {
    window.location.href = '/write'
  }
  let tovar=0
  function toPlant() {
    window.location.href = '/plants'
  }

  return (
    <div id="">
      <Header />
      <div>
        <span id="background"></span>
        <div class="profile_container">
          <div id="profile"></div>
        </div>

        <h1 id='texthead'>ANIMALS</h1>
        <div id='moveButton' onClick={() => toPlant()}></div>
      </div>

      <div id="mainPostListArea">
        <div className="mainPostList">
          {posts
            .filter((post) => post.category === 'animal')
            .map((post, index) => (
              <div
                key={post.id}
                className="mainPost"
                onClick={() => postDetail(index)}
              >
                <img className="postImage" src={post.image} />
              </div>
            ))}
        </div>
      </div>
      <div id="writeBtn">
        <img className="icon" onClick={() => postWrite()} src={require("./img/pencil.png")} />
      </div>
    </div>
  )
}

export default Animals
