import React, {Component} from "react"; 

class Video extends Component {

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
        
  
        <div className="container">
          
          <h2><strong>Cricket Videos</strong></h2>

          <p> Under maintenance. </p>
           
        </div>
  
      );
    }
  }

export default Video;  