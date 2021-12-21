import React from 'react'
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { ActivityPage } from './pages/ActivityPage';
import { TaskApp } from './pages/TaskApp';
import { AppAside } from './cmps/AppAside';
import {HomePage} from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import { FormSignup } from './cmps/forms/FormSignup';

export const App = () => {

  const {loggedInUser} = useSelector(state => state.userModule)

  const PrivateRoute = (props) => {
    // return props.isAdmin ? <Route {...props} /> : <Redirect to="/" />
    return loggedInUser ? <Route path={props.path} component={props.component} /> : <Redirect to="/login" />
  }

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
            <Route path="/login" component={HomePage}></Route>
            <Route path="/signup" component={FormSignup}></Route>
            <Route path="/" component={HomePage}></Route>
            {/* <PrivateRoute path="/boards" component={TaskApp}></PrivateRoute> */}
            {/* <PrivateRoute path="/" component={Login} /> */}
          </Switch>
        </div>
    </Router>
      // </DragDropContext>

  )
}
