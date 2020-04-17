import React from 'react';
import '../container/style.css'
import {Link} from 'react-router-dom'

function Nav() {
   
  return (
  <nav>
    
      <h3>logo</h3>
      <ui className ="nav-links">
          <Link   to ="/login">
          <li>Login</li>
          </Link>
          <Link to="/Sign">
          <li>Register</li>
          </Link>
      </ui>

  </nav>
  );
}

export default  Nav;
