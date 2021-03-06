import React, { Component } from 'react';
import FrontpageItem from './FrontPageNews.js'; 

class News extends Component {

    constructor () {
      super();
      this.state = {
        news: []
      }
   
    }
  
    componentDidMount (){
  
      const newsUrl = "https://cricplatoon.xyz/web/news_web.php?query=all";
  
      fetch(newsUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({
          news: response
        })
      })
     
    }

   
    
   
    render() {
  
      return (
        
  
        <div className="container-newsbox">

          <h2 className="titleText" align="center"> <img src="/asset/latest_icon.png" alt="licon"/> Latest News
          <img src="/asset/latest_icon.png" alt="licon"/> </h2>
          
          <FrontpageItem posts={this.state.news} />
           
        </div>
  
      );
    }
  }
  
  export default News;