import React, { Component } from 'react';

export default class FriendsHeader extends Component {
    render() {
        return (
            <header>
                <h1>Friends</h1>
                <button className="btn btn-primary addFriends__button">Add Friends</button>
                <button className="btn btn-primary ml-5 seeRequests__button">See Requests</button>
            </header>
        )
    }
}