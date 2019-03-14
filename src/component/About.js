import React, {Component} from "react"; 

class About extends Component {

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
          
         ABOUT US DUMMY TEXT
           
        </div>
  
      );
    }
  }

export default About;  