import React, { Component } from "react";
import UserManager from "../../modules/UserManager";
import FriendsManager from "../../modules/FriendsManager";
import FriendsCard from './FriendsCard';

export default class FriendsList extends Component {
    state = {
        users: [],
        friendships: [],
        friendsWithUserInfo: []
    }

    filterFriendsToDisplay = () => {
        // reduce users to include users' id equals the friendships' userId or the friendships otherUser and the isFriends is true
        const currentFriendsArray = this.state.users.filter(user => {
            return this.state.friendships.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)
        })
        return currentFriendsArray;
    }

    deleteFriendship = (event) => {
        const friendUserId = parseInt(event.target.id.split("--")[1])
        const friendshipToDelete = this.state.friendships.find(friendship => {
            return friendship.userId === friendUserId || friendUserId.otherUser === friendUserId
        })
        FriendsManager.deleteFriendShip(friendshipToDelete)
            .then(this.componentDidMount())
    }

    componentDidMount() {
        const activeUserId = sessionStorage.getItem("activeUser")
        UserManager.getAllExcludingActiveUser(activeUserId)
            .then(users => { this.setState({ users: users }) })
        return FriendsManager.getAllFriends("userId", activeUserId)
            .then(friendships => {
                FriendsManager.getAllFriends("otherUser", activeUserId)
                    .then(otherFriends => {
                        const allFriends = friendships.concat(otherFriends)
                        this.setState({ friendships: allFriends })
                        this.setState({ friendsWithUserInfo: this.filterFriendsToDisplay() })
                    })
            })
    }

    render() {
        return (
            <section className="friendsList__section">
                {
                    this.state.friendsWithUserInfo.map(user => {
                        return <FriendsCard
                            key={user.id}
                            user={user}
                            deleteFriendship = {this.deleteFriendship}
                            {...this.props} />
                    })
                }
            </section>
        )
    }
}