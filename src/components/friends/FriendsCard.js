import React, { Component } from "react";

export default class FriendsCard extends Component {
    componentDidMount() {
        this.setState({ friendshipId: this.props.friendship.id })
    }

    activeUser = parseInt(sessionStorage.getItem("activeUser"))

    render() {
        return (
            <div className="friendCard__div">
                <h3 className="friendName__h3">{this.props.user.username}</h3>

                {
                    this.props.friendship.isFriend
                    ? <button onClick={() => this.props.deleteFriendship(this.props.friendship.id)} className="deleteFriend__button">Delete</button>
                    :
                    this.props.friendship.userId === this.activeUser
                    ? <button disabled>Pending</button>
                    : <button onClick={() => this.props.acceptFriendship(this.props.friendship)}>Accept Request</button>
                }
            </div>
        )
    }
}