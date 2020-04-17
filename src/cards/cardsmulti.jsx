import React,{Component}from 'react'
import Card from './cards';

import img1 from "../assets/admin.png";
import img2 from "../assets/student.jpg";
import img3 from "../assets/aboutus.jfif";
import {Link} from 'react-router-dom'
import Home from "../container/main"
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Main from '../container/main'


class Cardsmulti extends Component{
    render(){
        return(
            <div className="homeDiv" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                paddingTop: 100,
                
              }}>
            <Typography className="heading" component="h1" variant="h3">
            ISE_COMMUNITY
            </Typography>
                <div className="subHeadDiv"> 
                 <Typography className="subHeading" variant="h5">
                  To realize the importance of time is the gate to wisdom.
                   </Typography>
                   </div>
            <div className="container-fluid d-flex justify-content-center">
            
                <div className="row">
                    <div className="col-md-4">
                        {/* <Link to ='/login'></Link> */}
                        <Card imgsrc={img1} title="ADMIN" goto="ENTER" />
                    </div>

                    <div className="col-md-4">
                    {/* <Link to ='/nav'></Link> */}
                        <Card imgsrc={img2} title="STUDENT" goto="Enter"/>
                    </div>
                    <div className="col-md-4">
                    {/* <Link to ='/main'></Link> */}
                        <Card imgsrc={img3} title="ABOUT ISE_COUMMUNITY" goto="LEARNMORE"/>
                    </div>
                </div>
            </div>
            </div>
        );
    }

}

export default Cardsmulti;