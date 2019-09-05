// Author: Will Wilkinson, Sarah Fleming, Jacquelyn McCray
// Purpose: Render header element containing an h1 and a button that routes the user to a page to search for other users to add as friends

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
            </header>
        )
    }
}