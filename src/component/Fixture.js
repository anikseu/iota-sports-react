import React, { Component } from 'react';

class Fixture extends Component {

  constructor() {
    super();
    this.state = {
      intl: [],
      domestic: []
    }

  }

  componentDidMount() {

    const endpointURL = "https://cricplatoon.xyz/web/fixture.php?intl";
    const endpointURL2 = "https://cricplatoon.xyz/web/fixture.php?domestic"; 

    fetch(endpointURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        intl: response
      })
    })

    fetch(endpointURL2)
    .then(response => response.json())
    .then(response => {
      this.setState({
        domestic: response
      })
    })

}



  render() {


    let intl = this.state.intl;
    let domestic = this.state.domestic; 

    let intlLoop = intl.map((post, index) => {
      return (
       
        <article key={index} className='fixture-block'>
          <div className="card bg-white">
            <div className="card-body text-center">
              <p className="card-text">


                {post.match_name} | {post.city}<br /><br/>
                <img src={post.team1_logo} alt="team2" height="50px" />
                {" " + post.team1_name} vs {post.team2_name + " "}
                <img src={post.team2_logo} alt="team2" height="50px" />
                <br /><br />

                <button type="button" className="btn btn-success">{"Starts in "+post.time}</button>
              
              </p>
            </div></div>
        </article>

      )
    })

    let domesticLoop = domestic.map((post, index) => {
      return (
       
        <article key={index} width="50%" className='fixture-block'>
          <div className="card bg-white">
            <div className="card-body text-center">
              <p className="card-text">


                {post.match_name} | {post.city}<br /><br/>
                <img src={post.team1_logo} alt="team2" height="50px" />
                {" " + post.team1_name} vs {post.team2_name + " "}
                <img src={post.team2_logo} alt="team2" height="50px" />
                <br /><br />

                <button type="button" className="btn btn-success">{"Starts in "+post.time}</button>
              
              </p>
            </div></div>
        </article>

      )
    })


    return (

      <div>
         <h5 align="center">International</h5>
        <hr/>

        {intlLoop}

      <br/><br/>
     <h5 align="center">Domestic</h5>
    <hr/>

    {domesticLoop}

  </div>
 
    );
  }
}

export default Fixture;