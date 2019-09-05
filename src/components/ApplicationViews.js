import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import WelcomePage from "./welcome/WelcomePage";
import RegistrationForm from "./auth/Register"
import LoginForm from "./auth/Login";
import EventsSection from "./events/EventsSection"
import EventsForm from './events/EventsForm';
import EventEditForm from './events/EventsEditForm';
import FriendsSection from './friends/FriendsSection'
import FriendsSearch from './friends/FriendsSearch'
import Messages from "./messages/MessageSection"
import TaskSection from "./tasks/TaskSection";
import TaskAddForm from "./tasks/TaskAddForm";
import TaskEditForm from "./tasks/TaskEditForm";
import UserManager from "../modules/UserManager";
import FriendsManager from "../modules/FriendsManager";

export default class ApplicationViews extends Component {
  state = {
    users: [],
    friendships: [],
    friendsWithUserInfo: [],
    acceptedFriends: []
  }

  getAllFriendData = () => {
    const activeUserId = sessionStorage.getItem("activeUser")
    UserManager.getAllExcludingActiveUser(activeUserId)
      .then(users => { this.setState({ users: users }) })
    return FriendsManager.getAllFriends("userId", activeUserId)
      .then(friendships => {
        FriendsManager.getAllFriends("otherUser", activeUserId)
          .then(otherFriends => {
            const allFriends = friendships.concat(otherFriends)
            const pendingAndAcceptedFriends = this.filterFriendsToDisplay(allFriends)
            const acceptedFriends = this.filterAcceptedFriends(allFriends)
            // Use allFriends array to set state for both 'friendships' and 'friendsWithUserInfo' so that 'friendsWithUserInfo' is not dependent on state of 'friendships'
            this.setState({
              friendships: allFriends,
              friendsWithUserInfo: pendingAndAcceptedFriends,
              acceptedFriends: acceptedFriends
            })
          })
      })
  }

  filterFriendsToDisplay = (allFriends) => {
    const pendingAndAcceptedFriends = this.state.users.filter(user => {
      return allFriends.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)
    })
    return pendingAndAcceptedFriends;
  }

  filterAcceptedFriends = (allFriends) => {
    const acceptedFriends = this.state.users.filter(user => {
      return allFriends.find(friendship => (user.id === friendship.userId || user.id === friendship.otherUser) && friendship.isFriend)
    })
    return acceptedFriends;
  }

  componentDidMount() {
    this.getAllFriendData()
  }

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

        <Route
          exact path="/friends" render={props => {
            return this.isAuthenticated()
              ? <FriendsSection
              {...props}
              friendData={this.state}
              getAllFriendData={this.getAllFriendData}
              />
              : <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/friends/new" render={props => {
            return this.isAuthenticated()
              ? <FriendsSearch {...props}
              friendData={this.state}
              getAllFriendData={this.getAllFriendData}
              />
              : <Redirect to="/welcome" />
            }}
            />

        <Route
          path="/messages" render={props => {
            return this.isAuthenticated()
            ? <Messages
            friendData={this.state}
            getAllFriendData={this.getAllFriendData}
            />
            : <Redirect to="/welcome" />
          }}
          />

        {/* EVENTS ROUTES START */}
        <Route exact path="/events" render={props => {
          return this.isAuthenticated()
          ? <EventsSection {...props}
          friendData={this.state}
          getAllFriendData={this.getAllFriendData}
            />
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