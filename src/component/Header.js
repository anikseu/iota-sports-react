import React from 'react'; 
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (


    


  <div className="main-menu">
    
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