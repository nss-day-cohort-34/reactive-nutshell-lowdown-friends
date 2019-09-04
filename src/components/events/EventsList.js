import React, { Component } from "react"
import EventCard from './EventCard'
import EventsManager from '../../modules/EventManager';
import FriendsManager from '../../modules/FriendsManager';
import UserManager from "../../modules/UserManager";

export default class EventsList extends Component {
    state = {
        futureEvents: [],
        pastEvents: [],
        users: [],
        friendships: [],
        friendsWithUserInfo: []
    }
    deleteEvent = id => {
        EventsManager.deleteEvent(id)
            .then(() => {
                // this.getAllEventsDataAndSetState()
            })
    }

    componentDidMount() {
        this.getAllFriendData()
        .then((currentFriendsArray) => {
            this.getAllEventsDataAndSetState(currentFriendsArray)
        })
    }

    getAllFriendData = () => {
        const activeUserId = sessionStorage.getItem("activeUser")
        UserManager.getAllExcludingActiveUser(activeUserId)
            .then(users => { this.setState({ users: users }) })
        return FriendsManager.getAllFriends("userId", activeUserId)
            .then(friendships => {
                return FriendsManager.getAllFriends("otherUser", activeUserId)
                    .then(otherFriends => {
                        const allFriends = friendships.concat(otherFriends)
                        const currentFriendsArray = this.filterFriendsToDisplay(allFriends)
                        // Use allFriends array to set state for both 'friendships' and 'friendsWithUserInfo' so that 'friendsWithUserInfo' is not dependent on state of 'friendships'
                        this.setState({
                            friendships: allFriends,
                            friendsWithUserInfo: currentFriendsArray
                        })
                        return currentFriendsArray
                    })
            })
    }

    filterFriendsToDisplay = (allFriends) => {
        const currentFriendsArray = this.state.users.filter(user => {
            return allFriends.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)
        })
        return currentFriendsArray;
    }

    getAllEventsDataAndSetState = (currentFriendsArray) => {
        const activeUser = sessionStorage.getItem("activeUser")
        console.log(currentFriendsArray)
        EventsManager.getAll()
        .then(events => {
            const friendsEvents = events.filter(event => {
                console.log(event.user)
                return currentFriendsArray.includes(event.user)
            })
            console.log(events)
            console.log(friendsEvents)
        })
    }

    filterPastAndFutureEvents = (events) => {
        const currentDate = new Date()
        currentDate.setDate(currentDate.getDate() - 1);
        const futureEvents = []
        const pastEvents = []
        events.map(event => {
            const eventDate = new Date(event.date)
            return (eventDate >= currentDate)
                ? futureEvents.push(event)
                : pastEvents.push(event)
        })
        this.setState({
            futureEvents: futureEvents,
            pastEvents: pastEvents
        })
    }

    render() {
        return (
            <>
                <div className="eventList__div container">
                    <h2 className="text-center my-5">EventsList</h2>
                    <div className="row">
                        {this.state.futureEvents.map(event => {
                            return <EventCard
                                key={event.id}
                                event={event}
                                deleteEvent={this.deleteEvent}
                                {...this.props}
                            />
                        })}
                    </div>
                </div>
            </>
        )
    }
}