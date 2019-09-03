import React, { Component } from "react";

export default class FriendsCard extends Component {
    render() {
        return (
            <div className="friendCard__div">
                <h3 className="friendName__h3">{this.props.user.username}</h3>
                <button onClick={this.props.deleteFriendship} id={"deleteFriend__button--" + this.props.user.id} className="deleteFriend__button">Delete</button>
            </div>
        )
    }
}