import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class HomeMain extends Component {

  constructor() {
    super();
    this.state = {
      match: []
    }

  }

  componentDidMount() {

    const endpointURL = "https://cricplatoon.xyz/web/liveMatch.php";

    fetch(endpointURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          match: response
        })
      })

  }




  render() {

    function decideBlinking(status){
      if(status === "inprogress")
        return <div className="blink_me">{status.toUpperCase()}</div>;
      
      return status.toUpperCase(); 
    }

   
    function isLive(status){
      if(status === "inprogress")
        return <a href="/ipl">
        <button type="button" className="btn btn-danger">Watch Live</button>
        </a>; 
      
    }

    let posts = this.state.match;

    let postLoop = posts.map((post, index) => {
      return (
        <article key={index} className='xiong-block'>
          <div className="card bg-white">
            <div className="card-body text-center">
              <p className="card-text">
                {decideBlinking(post.matchStatus)}<br/>
                <b>{post.series} | {post.matchType}</b><br /><br/>
              
                <img src={"http://i.cricketcb.com/cbzandroid/2.0/flags/team_" + post.team1_logo + "_50.png"} alt="team2" height="50px" />
                {" " + post.team1} vs {post.team2 + " "}
                <img src={"http://i.cricketcb.com/cbzandroid/2.0/flags/team_" + post.team2_logo + "_50.png"} alt="team2" height="50px" />
                <br />
                {post.status} <br /><br />
                <Link to = {"/MatchDetails/"+post.matchId}>
                 <button type="button" className="btn btn-success">View Details</button>
                </Link>   
                 {isLive(post.matchStatus)}
              </p>
            </div></div>
        </article>

      )
    })

    return (


      <div className="container">

        <h2 align="center">Latest Matches</h2>

        <div className="container">

          {postLoop}


        </div>
      </div>
    );
  }
}

export default HomeMain;