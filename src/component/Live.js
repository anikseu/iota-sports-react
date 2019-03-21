import React, { Component } from 'react';
import ReactHLS from 'react-hls';



class Live extends Component {

    constructor () {
      super();
      this.state = {
        news: []
      }
   
    }
  
    componentDidMount (){
  
      var id = this.props.match.params.channelId;
      const newsUrl = "https://crichub.xyz/web/getLink.php?id="+id;
      
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
    let url; 
    
    posts.forEach(function(element) {
        url = element["alt_image"]; 
      });
  
      return (
        
  
        <div className="container-newsdetail">

        <center>Press play button on the player to start streaming </center>

            <ReactHLS url={url}  height="480" width="700"/>

           
        </div>
  
      );
    }
  }
  
  export default Live;