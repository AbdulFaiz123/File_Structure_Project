import React from 'react';


import Login from "./login"
import Nav from "./nav";
import Sign from "./signupform";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function Main() {
  return (
    <Router>

    <div className="main">
    <Nav/>
    <Switch>
    <Route path ="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/Sign" component={Sign}/>
    </Switch>
    </div>
    </Router>
  );
}


const Home =() =>(
    <div>
        <h1>Home Page</h1>
    </div>
)
export default Main;
