import React, { Component } from 'react';


class NewsDetails extends Component {

    constructor () {
      super();
      this.state = {
        news: []
      }
   
    }
  
    componentDidMount (){
  
      var userId = this.props.match.params.newsId;
      console.log(userId); 
      const newsUrl = "http://localhost:3000/asset/newsItem.json?"+userId;
      console.log("debug: "+newsUrl);
      fetch(newsUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({
          news: response
        })
      })
     
    }

   
   
   
    render() {

    let posts = this.state.news; 

    let postLoop = posts.map((post, index)=> {
      return (
        <article key={index} className='xiong-block'>
        <img src={post.image} alt="" width="100%"/>
         
        <h1>{post.title}</h1>

          <p>{parseInt(post.time/(60*60), 10)} hours ago</p>

          <hr/>

          <p><b>{post.description}</b></p>

          <p>{post.content}</p>
        </article>

      )
    })
  
      return (
        
  
        <div className="container-newsdetail">

        {postLoop}
           
        </div>
  
      );
    }
  }
  
  export default NewsDetails;