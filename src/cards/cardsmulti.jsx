import React,{Component}from 'react'
import Card from './cards';

import img1 from "../assets/admin.png";
import img2 from "../assets/student.jpg";
import img3 from "../assets/aboutus.jfif";
import {Link} from 'react-router-dom'
import Home from "../container/main"
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';


class Cardsmulti extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="ADMIN" goto="ENTER"/>
                    </div>
                    <div className="col-md-4">
                   

                        <Card imgsrc={img2} title="STUDENT" 
                        goto="Enter"
                        />
                       

                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="ABOUT ISE_COUMMUNITY" goto="LEARNMORE"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cardsmulti;