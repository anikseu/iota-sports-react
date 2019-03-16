import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contact extends Component {

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
                                <Link to={"/MatchDetails/" + post.matchId}>
                                    <button type="button" class="btn btn-success">View Details</button>
                                </Link>
                            </p>
                        </div></div>
                </article>

            )
        })

        return (


            <div className="container">


                <div className="container-contact">

                    <p>Contact Us</p>
                    <div>
                        <form action="/action_page.php">
                            <label>First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                            <label>Email</label>
                            <input type="phone" id="phone" name="phone" placeholder="Your Phone Number" />

                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />


                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>


                </div>

            </div>

        );
    }
}

export default Contact;