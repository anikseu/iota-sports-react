import React from 'react'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"



class FrontpageItem extends React.Component {
  render () {
    let posts = this.props.posts

    let postLoop = posts.map((post, index)=> {
      return (
        <article key={index} className='xiong-block'>
        <img src={post.image} alt="" width="100%"/>
          <Link to={"/NewsDetail/"+post.id} >
                  <h5>{post.title}</h5>
          </Link>
          <p >{parseInt(post.time/(60*60), 10)} hours ago</p>
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
