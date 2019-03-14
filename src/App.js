import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';

import Home from "./component/Home"
import Contact from "./component/Contact"
import Error from "./component/Error"
import Header from "./component/Header"


class App extends Component {
  render() {
    return (
      
      
      <BrowserRouter>
      
      <div className=""> 
      <Header/> 
      <Switch>
      <Route path = "/" component = {Home} />
      <Route path = "/contact" component = {Contact} /> 
      <Route component = {Error}/> 

      </Switch>
      </div>

      </BrowserRouter>

    );
  }
}

export default App;
