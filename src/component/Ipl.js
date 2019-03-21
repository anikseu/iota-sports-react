import React, { Component } from 'react';


class Ipl extends Component {

    constructor () {
      super();
      this.state = {
        news: []
      }
   
    }
  
    componentDidMount (){
  
      var newsId = this.props.match.params.newsId;
      const newsUrl = "https://cricplatoon.xyz/web/news.php?newsId="+newsId;
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
    
  
      return (
        
  
        <div className="container-newsdetail">

        IPL BANNER PLACEHOLDER

        </div>
  
      );
    }
  }
  
  export default Ipl;