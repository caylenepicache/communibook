import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Button from '@material-ui/core/Button'


const NavBar = () => (
  <div id="NavBar">
    <div className="App">
          <h1>Hello Im Here</h1>
          <h1><Link to="/google">GOOGLE LINK HERE</Link></h1>
          <h1>Hello world</h1>
        <Button variant="contained" color="primary">
        Hello World
       </Button>
       </div>
    </div>
    );


export default NavBar;
