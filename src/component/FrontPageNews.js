import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const newTo = { 
    pathname: "/News", 
    param1: "Par1" 
  };

class FrontpageItem extends React.Component {
  render () {
    let posts = this.props.posts

    let postLoop = posts.map((post, index)=> {
      return (
        <article key={index} className='xiong-block'>
        <img src={post.image} width="100%"/>
          <Link to={post.link} params="test" >
                  <h5>{post.title}</h5>
          </Link>
          <p>{post.description}</p>
        </article>

      )
    })

    console.log("Debug");
    console.log(posts); 

    return (
      <div>
        {postLoop}
         
      </div>
    )
  }

}

export default FrontpageItem;
