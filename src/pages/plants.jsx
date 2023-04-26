import Header from "../components/Header";
import React, { useState } from 'react'
import dummyData from './data.jsx'
import '../pages/css/mainList.css'

const Plants = () =>{

    const posts = dummyData

    
  function postDetail(id) {
    window.location.href = '/detail/' + id
  }

  function postWrite() {
    window.location.href = '/write'
  }
  let tovar=0
  function toPlant() {
    window.location.href = '/'
  }


    return (
    <div id="">
      <Header />
      <div>
        <span id="newbackground"></span>
        <div class="profile_container">
          <div id="newprofile"></div>
        </div>

        <h1 id='texthead'>PLANTS</h1>
        <div id='newmoveButton' onClick={() => toPlant()}></div>
      </div>

      <div id="mainPostListArea">
        <div className="mainPostList">
          {posts
            .filter((post) => post.category === 'plant')
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
    );
}

export default Plants