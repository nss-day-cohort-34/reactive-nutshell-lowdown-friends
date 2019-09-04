import React, { Component } from "react";
import UserManager from "../../modules/UserManager";
import FriendsManager from "../../modules/FriendsManager";
import FriendsSearchCard from './FriendsSearchCard';

export default class FriendsSearch extends Component {
  state = {
    users: [],
    friendships: [],
    potentialFriends: [],
    friendSearchMatches: [],
    loadingStatus: false
  }

  getAllFriendData = () => {
    const activeUserId = sessionStorage.getItem("activeUser")
    UserManager.getAllExcludingActiveUser(activeUserId)
      .then(users => { this.setState({ users: users }) })
    return FriendsManager.getAllFriends("userId", activeUserId)
      .then(friendships => {
        FriendsManager.getAllFriends("otherUser", activeUserId)
          .then(otherFriends => {
            const allFriends = friendships.concat(otherFriends)
            this.setState({ friendships: allFriends })
            this.setState({ potentialFriends: this.searchPotentialFriendsToDisplay() })
          })
      })
  }

  componentDidMount() {
    this.getAllFriendData()
  }
  searchPotentialFriendsToDisplay = () => {
    // Get all current friends as an array of user objects and store in a variable
    const currentFriends = this.state.users.filter(user => {
      return this.state.friendships.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)
    })
    // Compare users array with current friends array and return only users not included in current friends array
    const potentialFriends = this.state.users.filter(user => {
      return !currentFriends.includes(user)
    })
    return potentialFriends;
  }

  handleChange = (event) => {
    const filteredPotentialFriends = this.state.potentialFriends.filter(user => {
      return user.username.includes(event.target.value)
    })
    this.setState({friendSearchMatches: filteredPotentialFriends})
  }

  addFriendship = (otherUserId) => {
    const activeUserId = parseInt(sessionStorage.getItem("activeUser"))
    const newFriendshipObj = {
      userId: activeUserId,
      otherUser: otherUserId,
      isFriend: false
    }
    FriendsManager.addFriendshipRequest(newFriendshipObj)
    .then(() => {
      window.alert("Friend request sent!")
      this.props.history.push("/friends")
    })
  }

  render() {
    return (
      <section className="friendsSearch__section">
        <input placeholder="Search for new friends" className="friendsSearch__input" id="friendsSearch_input" type="text"
        onKeyUp={this.handleChange} />
        {
          this.state.friendSearchMatches.map(user => {
            return <FriendsSearchCard
              key={user.id}
              user={user}
              addFriendship={this.addFriendship}
              {...this.props} />
          })
        }
      </section>
    )
  }
}