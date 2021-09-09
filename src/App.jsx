import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'; //do npm i
import './App.css';
import {ActivityPage} from './pages/ActivityPage';
import { TaskApp } from './pages/TaskApp';
import { AppAside } from './cmps/AppAside';


export default class App extends Component {
  render() {
    return (
    
      <Router>
        <div className="main-app">
        <AppAside></AppAside>
        <Switch>
          <Route path="/user" component={ActivityPage}></Route>
          <Route path="/" component={TaskApp}></Route>
        </Switch>
        </div>
      </Router>

    )
  }
}
