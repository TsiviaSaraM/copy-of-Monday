import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { ActivityPage } from './pages/ActivityPage';
import { TaskApp } from './pages/TaskApp';
import { AppAside } from './cmps/AppAside';
import {HomePage} from './pages/HomePage';
import { UserPage } from './pages/UserPage';

function _App() {

  return (

      // <DragDropContext onDragEnd={()=>{}}>
    <Router>

        <div className="main-app">
          <AppAside></AppAside>
          <Switch>
          <Route path="/users" component={UserPage}></Route>
            <Route path="/user" component={ActivityPage}></Route>
            <Route path="/boards/:id" component={TaskApp}></Route>
            <Route path="/boards" component={TaskApp}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
        </div>
    </Router>
      // </DragDropContext>

  )
}


const mapStateToProps = state => {
  return {
    // loggedInUser: state.userModule.loggedInUser,
  }
}

export const App = connect(mapStateToProps)(_App)
