import React, { Component } from 'react';
import UserData from '../../modules/UserManager'

class RegistrationForm extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    loadingStatus: false
  }

  // Handle change on each input and set state to value entered by user
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  // Validate that email does not exist in database. If unique, call function to check that username is unique
  checkEmailIsUnique = (userObj) => {
    UserData.getUserFromSearch("email", userObj.email)
    .then((usersArr) => {
      const emailIsNotUnique = usersArr.length > 0
      if (emailIsNotUnique) {
        const userConfirmation = window.confirm("Email already exists. Click \"OK\" to log in as existing user. Click \"Cancel\" to enter a different email.")
        if (userConfirmation) {
          this.props.history.push("/login")
        }
      } else {
        this.checkUsernameIsUnique(userObj)
      }
    })
  }

  // Validate that username does not exist in database. If unique, call function to save new user to database and redirect to "home" page
  checkUsernameIsUnique = (userObj) => {
    UserData.getUserFromSearch("username", userObj.username)
      .then((usersArr) => {
        const usernameIsNotUnique = usersArr.length > 0
        if (usernameIsNotUnique) {
          alert("Username already taken. Choose a different username.")
        } else {
          this.saveAndLoginNewUserAndRedirectToHome(userObj)
        }
      })
  }

  // Post new user to database, set new user ID in session storage as "activeUser," and redirect new user to "home" page
  saveAndLoginNewUserAndRedirectToHome = (userObj) => {
    UserData.post(userObj)
      .then((newUser) => {
        sessionStorage.setItem("activeUser", newUser.id)
        this.setState({
          loadingStatus: true
        })
      })
      .then(() => {
        this.props.history.push("/")
      })
  }

  // Validate that values entered in "password" and "confirm password" inputs match
  checkPasswordsMatch = () => {
    const password = this.state.password
    const confirmPassword = this.state.confirmPassword
    let passwordsMatch = false
    if (password === confirmPassword) {
      passwordsMatch = true
    } else {
      alert("Passwords do not match. Please try again.")
    }
    return passwordsMatch
  }

  // When submit button is clicked, create new user object, run functions to validate user input
  handleSubmit = (event) => {
    event.preventDefault()
    const userObj = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    const passwordsMatch = this.checkPasswordsMatch()
    if (passwordsMatch) {
      this.checkEmailIsUnique(userObj)
    }
  }

  render() {

    return (
      <form>
        <h1>Register New User</h1>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder="Email Address" value={this.state.email}
          onChange={this.handleChange} />
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Choose Username" value={this.state.username}
          onChange={this.handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" value={this.state.password}
          onChange={this.handleChange} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" placeholder="Confirm Password" value={this.state.confirmPassword}
          onChange={this.handleChange} />
        <input type="submit" disabled={this.state.loadingStatus} value="Register" onClick={this.handleSubmit} />
      </form >
    )
  }

}

export default RegistrationForm