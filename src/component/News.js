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
  
      const newsUrl = "/asset/news.json";
  
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

          <h2 className="titleText" align="center"> <img src="/asset/latest_icon.png"/> Latest News
          <img src="/asset/latest_icon.png"/> </h2>
          
          <FrontpageItem posts={this.state.news} />
           
        </div>
  
      );
    }
  }
  
  export default News;