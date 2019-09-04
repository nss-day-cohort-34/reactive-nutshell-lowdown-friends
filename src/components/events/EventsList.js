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
                this.getAllEventsDataAndSetState()
            })
    }

    componentDidMount() {
        this.getAllFriendData()
        .then(() => {
            this.getAllEventsDataAndSetState()
        })
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
                        const currentFriendsArray = this.filterFriends(allFriends)
                        // Use allFriends array to set state for both 'friendships' and 'friendsWithUserInfo' so that 'friendsWithUserInfo' is not dependent on state of 'friendships'
                        this.setState({
                            friendships: allFriends,
                            friendsWithUserInfo: currentFriendsArray
                        })
                    })
            })
    }

    filterFriends = (allFriends) => {
        const currentFriendsArray = this.state.users.filter(user => {
            return allFriends.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)
        })
        return currentFriendsArray;
    }



    getAllEventsDataAndSetState = (currentFriendsArray) => {
        const activeUser = sessionStorage.getItem("activeUser")
        // console.log(this.state.users)
        EventsManager.getAllEventsForActiveUser(activeUser)
        .then(events => {

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