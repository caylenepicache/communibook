import React from 'react';
import Login from './Login';
import Google from './Google';
//import "./index.css";

class Home extends React.Component {


  render() {
    return (
    <div>
    <Google />
    <Login />
    </div>

    )
  }
}


export default Home;