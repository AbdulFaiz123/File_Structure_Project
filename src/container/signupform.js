import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react'
import "../cards/card-style.css"


function RegisterPage(){
    const[user,setUser] = useState({
        firstName:'',
        lastName:'',
        usn:"",
        sem:'',
        username:'',
        password:''
    });

    const[submitted,setSubmitted] = useState(false);
    
    



    function handleChange(e){
        const{name,value} = e.target;
        setUser(user =>({...user,[name]:value}));
    }
    function handleSubmit(e) {
        e.preventDefault();
    setSubmitted(true);
       
    }
    return(
        <div className='col-lg-8 offset-lg-2'>
            <h2>Register</h2>
            <form name ="form-group" onSubmit={handleSubmit}>

        <div className="form-group">
        <label>First Name</label>
        <input type="text"
        name="firstName"
        value={user.firstName}
        onChange ={handleChange}
        className ={'form-control' + (submitted && !user.firstName ? 'is-invalid': '')}/>
        {submitted && !user.firstName &&
        <div className="invalid-feedback">first Name is required</div>}
        </div>

            
       
     <div className="form-group">
     <label>Last Name</label>
     <input type="text" 
     name="lastName" 
     value={user.lastName} 
     onChange={handleChange} 
     className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
     {submitted && !user.lastName &&
         <div className="invalid-feedback">Last Name is required</div>
     }
    </div>
    <div className="form-group">
    <label>USN</label>
    <input type="text" name="usn" value={user.usn} onChange={handleChange} className={'form-control' + (submitted && !user.usn ? ' is-invalid' : '')} />
    {submitted && !user.usn &&
        <div className="invalid-feedback">usn is required</div>
    }
    </div>
      <div className="form-group">
    <label>Semester</label>
    <input type="text" name="sem" value={user.sem} onChange={handleChange} className={'form-control' + (submitted && !user.sem ? ' is-invalid' : '')} />
    {submitted && !user.sem &&
        <div className="invalid-feedback">semester is required</div>
    }
      </div>
      <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
        <div className="form-group">
            <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
        </div>
        <div className="form-group">
                    <button className="btn btn-primary">
                        { <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                     {/* <Link to="/login" className="btn btn-link">Cancel</Link>  */}
        </div>    

    </form>
    </div>

    )

}

export default RegisterPage;