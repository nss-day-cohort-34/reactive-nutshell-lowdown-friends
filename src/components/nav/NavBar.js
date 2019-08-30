import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

    logOut = (event) => {
        sessionStorage.removeItem("activeUser")
        this.props.history.push("/welcome")
    }

    render() {
        return this.isAuthenticated()
        ?(
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                </ul>
                <button onClick={this.logOut}>Log Out</button>
            </nav>
        )
        :<nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Log In</Link>
                    </li>
                </ul>
            </nav>
    }
}

// Export using withRouter to be able to use {...props} in log out function
export default withRouter(NavBar)
