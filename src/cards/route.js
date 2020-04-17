import React from 'react';
import Login from "../container/login"
import Nav from "../container/nav";
import Sign from "../container/signupform";



import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Cardsmulti from './cardsmulti';

function first() {
  return (
    <Router>

    <div className="centre">
    <Nav/>
    <Switch>
    <Route path ="/" exact component={Cardsmulti}/>
    <Route path ="/home"  component={Home}/>
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
export default first;
