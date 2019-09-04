import React, { Component } from 'react';

export default class FriendsHeader extends Component {
    render() {
        return (
            <header>
                <h1>Friends</h1>
                <button onClick={() => {
                    this.props.history.push("/friends/new")
                }}
                className="btn btn-primary findNewFriends__button">Find New Friends</button>
                <button className="btn btn-primary ml-5 seeRequests__button">See Requests</button>
            </header>
        )
    }
}