import React from 'react'
import { Link } from "react-router-dom"



class ChannelList extends React.Component {

    constructor() {
        super();
        this.state = {
            channels: []
        }

    }

    componentDidMount() {

        const newsUrl = "https://crichub.xyz/web/get.php";

        fetch(newsUrl, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    channels: response
                })
            })

    }



    render() {
        let posts = this.state.channels

        let postLoop = posts.map((post, index) => {
            return (
                <article key={index} className='channel-block'>
                    <div className="card bg-white">
                        <div className="card-body text-center">
                            <p className="card-text">


                                {post.apk}<br /><br />
                                <img src={post.url} alt="team1" height="50px" />
                                {" " + post.name} vs {post.alt_url + " "}
                                <img src={post.image} alt="team2" height="50px" />
                                <br /><br />

                                <Link to = {"/live/"+post.id}>
                                <button type="button" className="btn btn-success">Watch Live</button>
                                </Link>
                            </p>
                        </div></div>
                </article>

            )
        })

        return (
            <div align="left">
                {postLoop}

            </div>
        )
    }

}

export default ChannelList;
