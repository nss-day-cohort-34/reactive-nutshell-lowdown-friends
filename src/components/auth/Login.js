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
    UserData.get("email", userObj.email)
      .then((userArr) => {
        const userIsInDatabase = userArr.length > 0
        const existingUserObj = userArr[0]
        const passwordMatches = existingUserObj.password === userObj.password
        if (userIsInDatabase && passwordMatches) {
          sessionStorage.setItem("activeUser", existingUserObj.id)
          this.props.history.push("/")
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