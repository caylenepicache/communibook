import React,  { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/layouts/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
