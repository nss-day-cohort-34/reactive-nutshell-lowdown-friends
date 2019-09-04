import React, { Component } from "react";

export default class FriendsSearchCard extends Component {
    render() {
        return (
            <div className="friendCard__div">
                <h3 className="friendName__h3">{this.props.user.username}</h3>
                {/* <button onClick={() => this.props.addFriendship(friendshipObj)} className="addFriend__button">Add Friend</button> */}
            </div>
        )
    }
}