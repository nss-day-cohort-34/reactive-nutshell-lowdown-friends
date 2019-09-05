// Author: Will Wilkinson, Sarah Fleming, Jacquelyn McCray
// Purpose: Render a card to the DOM with friend data from the API, and a delete button that allows activeUser to remove the friend

import React, { Component } from "react";

export default class FriendsCard extends Component {
    componentDidMount() {
        this.setState({ friendshipId: this.props.friendship.id })
    }

    activeUser = parseInt(sessionStorage.getItem("activeUser"))

    render() {
        return (
            <div className="col-md-4 friendCard__div card">
                <div className="card-body">
                <h3 className="friendName__h3">{this.props.user.username}</h3>

                {
                    this.props.friendship.isFriend
                    ? <button onClick={() => this.props.deleteFriendship(this.props.friendship.id)} className="deleteFriend__button btn btn-sm btn-danger card-link">Delete</button>
                    :
                    this.props.friendship.userId === this.activeUser
                    ? <button className="btn btn-secondary btn-sm card-link"disabled>Pending</button>
                    : <> <button onClick={() => this.props.acceptFriendship(this.props.friendship)} className="btn btn-success btn-sm card-link">Accept Request</button>
                    <button onClick={() => this.props.deleteFriendship(this.props.friendship.id)} className="btn btn-danger btn-sm card-link">Deny Request</button> </>
                }
                </div>
            </div>
        )
    }
}