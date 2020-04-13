import React,{Component}from 'react'
import  Card from './cardsmulti'

import Login from "../container/login"
import Main from "../container/main"
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function Routes() {
    return (
      <Router>
  
      <div className="main">
      <Switch>
      <Route path ="/" exact component={Main}/>
      </Switch>
      </div>
      </Router>
    );
  }
  export default Routes;