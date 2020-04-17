import React from 'react';
import '../container/style.css'
import {Link} from 'react-router-dom'



function userscreen(){
    return(

    <nav>
        <h3>logo</h3>
        <ui classname = 'user-links'>
            <Link to = '/events'>
            <li>Events</li>
            </Link>
            <Link to = '/course'>
            <li>course</li>
            </Link>
            <Link to = '/feedback'>
            <li>feedback</li>
            </Link>
        </ui>
    </nav>
    )
    
}