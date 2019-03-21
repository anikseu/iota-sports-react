import React from 'react'; 
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (

 <div> 

<div className="container">
  <div className="row">
     <img src="/asset/banner.png" alt="banner" width="100%"/>

     <ul className="top-menu">
     
     <li className="list-top" >
     <NavLink to="/"> Home </NavLink> 
     </li>

{/* 
     <li className="list-top">
     <NavLink to="/about"> Live Matches </NavLink> 
     </li> */}

     <li className="list-top">
     <NavLink to="/fixture"> Fixture </NavLink> 
     </li>


     {/* <li className="list-top">
     <NavLink to="/about"> News </NavLink> 
     </li> */}

     <li className="list-top">
     <NavLink to="/ranking"> Ranking </NavLink> 
     </li>

     <li className="list-top">
     <NavLink to="/video"> Video </NavLink> 
     </li>


     <li className="list-top">
     <NavLink to="/about"> About </NavLink> 
     </li>

     <li className="list-top">
     <NavLink to="/contact"> Contact </NavLink> 
     </li>

     <li className="list-top">
     <NavLink to="/ipl"> IPL 2019 </NavLink> 
     </li>

    
    
   </ul>
  </div>

  </div>

 

   </div> 
    );
}

export default Header;  