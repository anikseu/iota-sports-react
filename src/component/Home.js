import React from "react"; 
import {Route, Switch} from "react-router-dom"
import News from "./News"
import About from "./About"
import HomeMain from "./HomeMain"
import NewsDetails from "./NewsDetail";
import Ranking from "./Ranking";
import Fixture from "./Fixture";
import Contact from "./Contact";
import Ipl from "./Ipl";
import ChannelList from "./ChannelList";


const Home = () => {
    return (
 
<div className="container mainBox bg-white">

  <div className="row">
    <div className="col-md-4 border">
    
    <Switch>
    <Route path = "/" component = {News} /> 
    <Route path = "/ipl" component = {ChannelList} /> 
    </Switch>

    </div>
    <div className="col-md-8 border">
     
     <div className="container-largebox">
     <Switch>
      <Route path = "/" component = {HomeMain} exact/>
      <Route path = "/about" component = {About} /> 
      <Route path = "/NewsDetail/:newsId" component = {NewsDetails} />
      <Route path = "/ranking" component = {Ranking} />  
      <Route path = "/fixture" component = {Fixture} /> 
      <Route path = "/contact" component = {Contact} /> 
      <Route path = "/ipl" component = {Ipl} /> 
      <Route component = {Error}/> 
     </Switch>
     </div>
    
    </div>
   
  </div>
</div>
   
    );
}

export default Home;  