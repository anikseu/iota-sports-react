import React from 'react'; 
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (

 <div> 

  <div className="container">
     <img src="https://via.placeholder.com/1150x150" alt="banner" width="100%"/>
  </div>

  <ul className="top-menu">
     
     <li className="list-top" >
     <NavLink to="/"> Home </NavLink> 
     </li>

     <li className="list-top">
     <NavLink to="/about"> About </NavLink> 
     </li>

    
    
   </ul>

   </div> 
    );
}

export default Header;  