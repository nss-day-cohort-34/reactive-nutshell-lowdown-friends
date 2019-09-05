// Author: Will Wilkinson, Sarah Fleming, Jacquelyn McCray
// Purpose: Display results of FriendsSearch as cards with the user's username and a button to add as a friend

import React, { Component } from "react";

export default class FriendsSearchCard extends Component {
    render() {
        return (
            <div className="friendCard__div">
                <h3 className="friendName__h3">{this.props.user.username}</h3>
                <button onClick={() => this.props.addFriendship(this.props.user.id)} className="addFriend__button">
                  Add Friend
                  </button>
            </div>
        )
    }
}