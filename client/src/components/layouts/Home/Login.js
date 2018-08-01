import React from 'react';
//import axios from 'axios';
import "./Login.css";
//import TextField from '@material-ui/core/TextField';
//import FormControl from '@material-ui/core/FormControl';


class Login extends React.Component {


    render(){
    return(
        <div className="container">
            <h1 className="center-align">Disclaimer</h1>
            <p>When using this app and engaging in book exchanges, please be aware of your surroundings and exchange content safely. You agree that your use of this App and exchanging of books is at your own risk, and it is your responsibility to maintain such health, liability, hazard, personal injury, medical, life, and other insurance policies as you deem reasonably necessary for any injuries that you may incur while using the App's Services. You also agree not to use the App to violate any applicable law, rule or regulation (including but not limited to the laws of trespass) and you agree not to encourage or enable any other individual to violate any applicable law, rule, or regulation. Without limiting the foregoing, you agree that in conjunction with your use of the App you will not inflict emotional distress on other people, will not humiliate other people (publicly or otherwise), will not assault or threaten other people, will not enter onto private property without permission, will not impersonate any other person or misrepresent your affiliation, title, or authority, and you will not otherwise engage in any activity that may result in injury, death, property damage, and/or liability of any kind. Further, in the event that you have a dispute with one or more other users of the App, you release the makers of this app (and our officers, directors, agents, subsidiaries, joint ventures and employees) from all claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes.</p>
            <div className="center-align">
            <p>
                    <label>
                            <input type="checkbox" id="test"/>
                            <span>By using this App, I agree to these terms and conditions.</span>
                    </label>
                </p>
            </div>
            <div className="center-align">
                <a className="waves-effect waves-light btn" id="submit">Submit</a>
            </div>




        {/* <div className="row">
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
        </div> */}
    </div>
    
        )
    }

}

export default Login;