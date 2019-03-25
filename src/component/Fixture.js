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

    const endpointURL = "http://127.0.0.1/cricintime/";

    fetch(endpointURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        intl: response
      })
    })

  
}



  render() {


    let intl = this.state.intl;

    let intlLoop = intl.map((post, index) => {
      return (
       
        <article key={index} className='fixture-block'>
          <div className="card bg-white">
            <div className="card-body text-center">
              <p className="card-text">


                {post.series} | {post.venue}<br /><br/>
                <img src={"http://i.cricketcb.com/cbzandroid/2.0/flags/team_" + post.teamOne + "_50.png"} alt="team2" height="50px" />
                  {" vs "}
                  <img src={"http://i.cricketcb.com/cbzandroid/2.0/flags/team_" + post.teamTwo + "_50.png"} alt="team2" height="50px" /><br/>
                {post.desc}
                <br /><br />

                <button type="button" className="btn btn-success">{post.start + " | "+post.date}</button>
              
              </p>
            </div></div>
        </article>

      )
    })

    


    return (

      <div>
         <h3>Fixture</h3>
        <hr/>

        {intlLoop}

      <br/><br/>
    

  </div>
 
    );
  }
}

export default Fixture;