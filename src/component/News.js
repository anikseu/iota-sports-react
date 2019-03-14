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
  
      const newsUrl = "http://localhost:3000/asset/news.json";
  
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
        
  
        <div className="container">
          
          <FrontpageItem posts={this.state.news} />
           
        </div>
  
      );
    }
  }
  
  export default News;