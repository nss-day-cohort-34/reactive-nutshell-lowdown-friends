import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import WelcomePage from "./welcome/WelcomePage";
import RegistrationForm from "./auth/Register"
import LoginForm from "./auth/Login";
import Messages from "./messages/MessageSection"
import TaskList from "./tasks/TaskList"
import TaskAddForm from "./tasks/TaskAddForm";

export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            // return this.isAuthenticated()
            // ? <Events />
            // : <Redirect to="/welcome" />
          }}
        />
        {/* Render welcome message */}
        <Route path="/welcome" component={WelcomePage} />

        {/* Render registration form */}
        <Route path="/register" component={RegistrationForm} />

        {/* Render login form */}
        <Route path="/login" component={LoginForm} />
        {/* <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        /> */}

        <Route
          path="/messages" render={props => {
            return this.isAuthenticated()
              ? <Messages />
              : <Redirect to="/welcome" />
          }}
        />

        <Route exact path="/tasks" render={props => {
          return this.isAuthenticated()
          ? <TaskList {...props} />
          : <Redirect to="/welcome" />
        }}
        />

        <Route path="/tasks/new" render={props => {
          return <TaskAddForm {...props} />
        }}
        />
      </React.Fragment>
    );
  }
}