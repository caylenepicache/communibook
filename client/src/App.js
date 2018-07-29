import React,  { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={NavBar} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
