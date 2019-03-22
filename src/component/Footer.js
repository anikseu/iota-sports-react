import React from 'react';
import { Link } from "react-router-dom"

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
                        <div className="footer-title">Info</div>
                        
                        <Link to="/about">• About</Link> <br/>
                        <Link to="/tos">• Terms And Condition</Link><br/>
                        <Link to="/privacy">• Privacy Policy</Link> <br/>
                       
                    </div>
                </div>
             
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Social</div>
                        
                        <Link to="/about">• Facebook</Link> <br/>
                        <Link to="/tos">• Twitter</Link><br/>
                        <Link to="/privacy">• YouTube</Link> <br/>


                    </div>
                </div>


                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Free Android App</div>
                        <a href="http://crichub.xyz/download/ipl2019.apk"><img src="/asset/apk_btn.png" alt="download for android" width="200px"/></a>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Premium iOS App</div>
                        <a href="https://itunes.apple.com/kw/app/ipl-2019-live/id1437185251"><img src="/asset/iphone_btn.png" alt="download for android" width="200px"/></a>
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