import React, { Component } from 'react';
import UserData from '../../modules/UserManager'


class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    loadingStatus: false,
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userObj = {
      email: this.state.email,
      password: this.state.password
    }
    UserData.getUserFromSearch("email", userObj.email)
      .then((userArr) => {
        const userIsInDatabase = userArr.length > 0
        if (userIsInDatabase) {
          const existingUserObj = userArr[0]
          const passwordMatches = existingUserObj.password === userObj.password
          if (passwordMatches) {
            sessionStorage.setItem("activeUser", existingUserObj.id)
            this.props.history.push("/")
          }
        } else {
          const userConfirmation = window.confirm("Username/password not found. Click \"Okay\" to register as new user. Click \"Cancel\" to try again.")
          if (userConfirmation) {
            this.props.history.push("/register")
          }
        }
      })
  }

  render() {

    return (
      <div>
        <h1>Log In</h1>
        <label htmlFor="email">Email Address</label>
        <input type="email" placeholder="Email Address" id="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={this.state.password} onChange={this.handleChange} />
        <input type="submit" disabled={this.state.loadingStatus} value="Log In" onClick={this.handleSubmit} />
      </div>
    )
  }
}

export default LoginForm;