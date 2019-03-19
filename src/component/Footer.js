import React from 'react';

const Footer = () => {
  return (

    <div>
      <div className="footer">
        <div className="container">
            <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    {/* <div className="ft-logo"><img src="https://easetemplate.com/free-website-templates/cointrade/images/logo.png" alt=""/></div> */}
                </div>
            </div>
            <hr className="footer-line"/>
            <div className="row ">
            

                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Trending</div>
                        
                    </div>
                </div>
              
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Info</div>
                        
                        <a href="#">• About</a><br/>
                        <a href="#">• Terms &amp; Condition</a><br/>
                        <a href="#">• Privacy Policy</a><br/>
                        <a href="#">• YouTube</a><br/>

                    </div>
                </div>
             
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Social</div>
                        
                        <a href="#">• Facebook</a><br/>
                        <a href="#">• Twitter</a><br/>
                        <a href="#">• Google+</a><br/>
                        <a href="#">• YouTube</a><br/>


                    </div>
                </div>
             
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-6 ">
                    <div className="footer-widget ">
                        <h3 className="footer-title">Subscribe Newsletter</h3>
                        <form>
                            <div className="newsletter-form">
                              
                                <button className="btn btn-default btn-sm" type="submit">Go</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
            <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
                    <div className="tiny-footer">
                        <p> Copyright © 2019 CricInTime. All Rights Reserved. Made with ❤ from Dhaka </p>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    </div>
       
  );
}

export default Footer;  