// Author: Will Wilkinson, Sarah Fleming, Jacquelyn McCray
// Purpose: Get friend data and render FriendCard components with friends' data from the API. Send down deleteFriendship and acceptFriendship methods as props on the FriendCard component

import React, { Component } from "react";
import FriendsManager from "../../modules/FriendsManager";
import FriendsCard from './FriendsCard';

export default class FriendsList extends Component {
    componentDidMount() {
        this.props.getAllFriendData()
      }

    deleteFriendship = friendshipId => {
        FriendsManager.deleteFriendShip(friendshipId)
        .then(() => {
            this.props.getAllFriendData()
        })
    }
    acceptFriendship = friendshipObj => {
        friendshipObj.isFriend = true
        FriendsManager.acceptFriendShip(friendshipObj)
        .then(() => {
            this.props.getAllFriendData()
        })
    }

    render() {
        return (
            <section className="friendsList__section mt-5">
                {
                    this.props.friendData.friendsWithUserInfo.map(user => {
                        return <FriendsCard
                            key={user.id}
                            user={user}
                            deleteFriendship={this.deleteFriendship}
                            acceptFriendship={this.acceptFriendship}
                            friendship={this.props.friendData.friendships.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)}
                            {...this.props} />
                    })
                }
            </section>
        )
    }
}