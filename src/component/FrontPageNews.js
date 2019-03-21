import React from 'react'
import {Link} from "react-router-dom"

var timeStamp = Math.floor(Date.now() / 1000);


function getTime(seconds){

  if(seconds>3600){
    return parseInt(seconds/3600, 10) + ' hours ago'; 
  }
  return parseInt(seconds/60, 10) + ' minutes ago'; 

}


class FrontpageItem extends React.Component {
  render () {
    let posts = this.props.posts

    let postLoop = posts.map((post, index)=> {
      return (
        <article key={index} className='news-block'>
        <img src={post.image} alt="" width="100%"/>
          <Link to={"/NewsDetail/"+post.newsId} >
                  <h5>{post.title}</h5>
          </Link>
          <p>Posted on : {getTime(timeStamp - parseInt(post.time, 10)) }</p>
        </article>

      )
    })

    return (
      <div align="left">
        {postLoop}
         
      </div>
    )
  }

}

export default FrontpageItem;
