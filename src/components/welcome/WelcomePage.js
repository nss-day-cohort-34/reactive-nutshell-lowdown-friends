import React, { Component } from 'react';
import { Link } from "react-router-dom"

class WelcomePage extends Component {

  render() {

    return (
      <div>
        <h1>Welcome to Nutshell!</h1>
        <p><Link className="welcome-link" to="/register">Click Here to Register</Link></p>
        <p><Link className="welcome-link" to="/login">Existing Users Log In Here</Link></p>
      </div>
    )
  }
}

export default WelcomePage;