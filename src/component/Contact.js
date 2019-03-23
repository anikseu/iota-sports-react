import React, { Component } from 'react';

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


        return (


            <div className="container">


                <div className="container-contact">

                    <p>Contact Us</p>
                    <div>
                        <form action="http://cricplatoon.xyz/web/contact.php">
                            <label>Name</label>
                            <input type="text" id="name" name="firstname" placeholder="Your name.." />

                            
                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />


                            <label>Your Query: </label>
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