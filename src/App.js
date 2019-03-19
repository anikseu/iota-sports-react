import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';

import Home from "./component/Home"
import Header from "./component/Header"
import Footer from "./component/Footer"

class App extends Component {
  render() {
    return (
      
      
      <BrowserRouter>
      
      <div className=""> 
      <Header/> 
      <Switch>
      <Route path = "/" component = {Home} />
      
      </Switch>
      <Footer/>
      </div>

      </BrowserRouter>

    );
  }
}

export default App;
