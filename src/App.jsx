import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './App.css';
import { ActivityPage } from './pages/ActivityPage';
import { TaskApp } from './pages/TaskApp';
import { AppAside } from './cmps/AppAside';

function _App() {

  return (

    <Router>
      <div className="main-app">
        <AppAside></AppAside>
        <Switch>
          <Route path="/user" component={ActivityPage}></Route>
          <Route path="/boards/:id" component={TaskApp}></Route>
          <Route path="/boards" component={TaskApp}></Route>
          <Route path="/" component={TaskApp}></Route>
        </Switch>
      </div>
    </Router>

  )
}


const mapStateToProps = state => {
  return {
    // loggedInUser: state.userModule.loggedInUser,
  }
}

export const App = connect(mapStateToProps)(_App)
