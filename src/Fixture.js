import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Fixture extends Component {

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


    let posts = this.state.match;

    let postLoop = posts.map((post, index) => {
      return (
        <article key={index} className='xiong-block'>
          <div className="card bg-white">
            <div className="card-body text-center">
              <p className="card-text">
                <div className="blink_me">{(post.matchStatus).toUpperCase()}</div>
                <b>{post.series}</b><br />
                {post.status} | {post.matchType}<br />
                <img src={"http://i.cricketcb.com/cbzandroid/2.0/flags/team_" + post.team1_logo + "_50.png"} alt="team2" height="50px" />
                {" " + post.team1} vs {post.team2 + " "}
                <img src={"http://i.cricketcb.com/cbzandroid/2.0/flags/team_" + post.team2_logo + "_50.png"} alt="team2" height="50px" />
                <br /><br />
                <Link to = {"/MatchDetails/"+post.matchId}>
                <button type="button" class="btn btn-success">View Details</button>
                </Link>
              </p>
            </div></div>
        </article>

      )
    })

    return (


      <div className="container">

        <h2 align="center">Cricket Fixture</h2>

        <div className="container">

          {postLoop}


        </div>
      </div>
    );
  }
}

export default Fixture;