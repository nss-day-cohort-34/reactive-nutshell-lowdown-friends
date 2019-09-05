import React, { Component } from 'react';
import { Link } from "react-router-dom"

class WelcomePage extends Component {

  render() {

    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Nutshell!</h1>
        <p><Link className="welcome-link btn btn-primary my-3" to="/register">Click Here to Register</Link></p>
        <p><Link className="welcome-link btn btn-primary my-3" to="/login">Existing Users Log In Here</Link></p>
      </div>
    )
  }
}

export default WelcomePage;