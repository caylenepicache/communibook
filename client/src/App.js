import React /*,  { Component } */ from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <h1>Hello world</h1>
        <Button variant="contained" color="primary">
        Hello World
       </Button>
       </div>
    );
  }
}

export default App;
