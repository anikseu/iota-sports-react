import React, { Component } from 'react';



var timeStamp = Math.floor(Date.now() / 1000);


function getTime(seconds){

  if(seconds>3600){
    return parseInt(seconds/3600, 10) + ' hours ago'; 
  }
  return parseInt(seconds/60, 10) + ' minutes ago'; 

}

function decodeHTMLEntities(text) {
  var entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#39', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"']
  ];

  for (var i = 0, max = entities.length; i < max; ++i) 
      text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

  return text;
}

class NewsDetails extends Component {

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

    let posts = this.state.news; 

    

    console.log(posts); 

    let postLoop = posts.map((post, index)=> {
      return (
        <article key={index} className='xiong-block'>
        <img src={post.image} alt="" width="100%"/>
         
        <h1>{post.title}</h1>

          <p>{getTime(timeStamp - parseInt(post.time, 10))}</p>

          <hr/>

          <p><b>{post.description}</b></p>

          {decodeHTMLEntities(post.content)}
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