import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import WelcomePage from "./welcome/WelcomePage";
import RegistrationForm from "./auth/Register"
import LoginForm from "./auth/Login";
import EventsSection from "./events/EventsSection"
import EventsForm from './events/EventsForm';
import EventEditForm from './events/EventsEditForm';
import FriendsSection from './friends/FriendsSection';

import NewsSection from './news/NewsSection';
import NewsForm from './news/NewsForm'
import NewsEditForm from './news/NewsEditForm';
import FriendsSearch from './friends/FriendsSearch'
import Messages from "./messages/MessageSection"
import TaskSection from "./tasks/TaskSection";
import TaskAddForm from "./tasks/TaskAddForm";
import TaskEditForm from "./tasks/TaskEditForm";

export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            return this.isAuthenticated()
            ? <NewsSection {...props} />
            : <Redirect to="/welcome" />
          }}
        />
        <Route path="/new" render={(props) => {
          return this.isAuthenticated()
            ? <NewsForm {...props} />
            : <Redirect to="/welcome" />
        }} />
        
        <Route path="/:newsId(\d+)/edit" render={props => {
          return this.isAuthenticated()
            ? <NewsEditForm {...props} />
            : <Redirect to="/welcome" />

        }}
        />
        {/* Render welcome message */}
        <Route path="/welcome" component={WelcomePage} />

        {/* Render registration form */}
        <Route path="/register" component={RegistrationForm} />

        {/* Render login form */}
        <Route path="/login" component={LoginForm} />

        <Route
          exact path="/friends" render={props => {
            return this.isAuthenticated()
            ? <FriendsSection {...props} />
            : <Redirect to="/welcome" />
          }}
        />

        <Route
        path="/friends/new" render={props => {
          return this.isAuthenticated()
          ? <FriendsSearch {...props} />
          : <Redirect to="/welcome" />
        }}
        />

        <Route
          path="/messages" render={props => {
            return this.isAuthenticated()
              ? <Messages />
              : <Redirect to="/welcome" />
          }}
        />

        {/* EVENTS ROUTES START */}
        <Route exact path="/events" render={props => {
          return this.isAuthenticated()
            ? <EventsSection {...props} />
            : <Redirect to="/welcome" />
        }}
        />

        <Route path="/events/new" render={(props) => {
          return this.isAuthenticated()
            ? <EventsForm {...props} />
            : <Redirect to="/welcome" />
        }} />

        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return this.isAuthenticated()
            ? <EventEditForm {...props} />
            : <Redirect to="/welcome" />

        }}
        />
        {/* EVENTS ROUTES END */}


        <Route exact path="/tasks" render={props => {
          return this.isAuthenticated()
            ? <TaskSection {...props} />
            : <Redirect to="/welcome" />
        }}
        />

        <Route path="/tasks/new" render={props => {
          return this.isAuthenticated()
            ? <TaskAddForm {...props} />
            : <Redirect to="/welcome" />
        }}
        />

        <Route path="/tasks/:taskId(\d+)/edit" render={props => {
          return this.isAuthenticated()
            ? <TaskEditForm {...props} />
            : <Redirect to="/welcome" />
        }}
        />
      </React.Fragment>
    );
  }
}