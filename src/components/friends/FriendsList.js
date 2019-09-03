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
        const currentFriendsArray = this.state.users.filter(user => {
            return this.state.friendships.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)
        })
        return currentFriendsArray;
    }
    deleteFriendship = friendshipId => {
        FriendsManager.deleteFriendShip(friendshipId)
            .then(() => {
                this.componentDidMount()
            })
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
                            deleteFriendship={this.deleteFriendship}
                            friendship={this.state.friendships.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)}
                            {...this.props} />
                    })
                }
            </section>
        )
    }
}