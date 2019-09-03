import React, { Component } from "react";
import UserManager from "../../modules/UserManager";
import FriendsManager from "../../modules/FriendsManager";
import FriendsCard from './FriendsCard';

export default class FriendsList extends Component {
    state = {
        users: [],
        friends: []
    }
    componentDidMount() {
        const activeUserId = sessionStorage.getItem("activeUser")
        return FriendsManager.getAllFriends("userId", activeUserId)
            .then(friendships => {
                FriendsManager.getAllFriends("otherUser", activeUserId)
                .then(otherFriends => {
                    const allFriends = friendships.concat(otherFriends)
                    this.setState({ friends: allFriends })
                    console.log(this.state)
                })
            }).then(UserManager.getAllExcludingActiveUser(activeUserId)
                .then(users => { this.setState({ users: users }) }))
    }

    render() {
        return (
            <section className="friendsList__section">
                {this.state.users.map(user => {
                    return <FriendsCard
                        key={user.id}
                        user={user}
                        {...this.props} />
                })}
            </section>
        )
    }
}