import React from 'react';
//import axios from 'axios';
import "./Login.css";
//import TextField from '@material-ui/core/TextField';
//import FormControl from '@material-ui/core/FormControl';


class Login extends React.Component {
    render(){
    return(
        <div className="container">
        <div className="row">
            <form className="col s12">
            <h3 className="center-align">Sign Up Here</h3>
            <div className="row">
                <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label for="first_name">First Name</label>
            </div>
                <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
            </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
            </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label for="password">Password</label>
            </div>
            </div>
            <button className="btn waves-effect waves-light" id="signUpNew" type="submit" name="action">Submit
                <i className="material-icons right">person_add</i>
            </button>
            </form>
        </div>
    </div>
    
        )
    }

}

export default Login;