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

    // Handle delete button on an event
    deleteEvent = id => {
        EventsManager.deleteEvent(id)
            .then(() => {
                this.getAllEvents()
                    .then(allEventsToDisplay => {
                        this.filterPastAndFutureEvents(allEventsToDisplay)
                    })
            })
    }

    componentDidMount() {
        this.getAllFriendDataAndSetState()
            .then(() => {
                this.getAllEvents()
                    .then(allEvents => {
                        this.filterPastAndFutureEvents(allEvents)
                    })
            })
    }

    getAllFriendDataAndSetState = () => {
        const activeUserId = sessionStorage.getItem("activeUser")
        // getAllExcludingActiveUser returns array of user objects with associated events
        UserManager.getAllExcludingActiveUser(activeUserId)
            .then(users => { this.setState({ users: users }) })
        return FriendsManager.getAllFriends("userId", activeUserId)
            .then(friendships => {
                FriendsManager.getAllFriends("otherUser", activeUserId)
                    .then(otherFriends => {
                        const allFriendships = friendships.concat(otherFriends)
                        const currentFriendsArray = this.filterUsersArrToFriends(allFriendships)
                        // Use allFriendships array to set state for both 'friendships' and 'friendsWithUserInfo' so that 'friendsWithUserInfo' is not dependent on state of 'friendships'
                        this.setState({
                            friendships: allFriendships,
                            friendsWithUserInfo: currentFriendsArray
                        })
                    })
            })
    }

    // Get array of user objects that includes activeUser's friends only
    filterUsersArrToFriends = (allFriendships) => {
        const currentFriendsArray = this.state.users.filter(user => {
            return allFriendships.find(friendship => user.id === friendship.userId || user.id === friendship.otherUser)
        })
        return currentFriendsArray;
    }

    // Get all events created by activeUser and their friends
    getAllEvents = () => {
        const activeUser = sessionStorage.getItem("activeUser")
        return EventsManager.getAllEventsForActiveUser(activeUser)
            .then(events => {
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
            })
    }

    // Filter allEvents array into pastEvents and futureEvents arrays. Sort arrays ascending by date
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
        futureEvents.sort((a, b) => (a.date > b.date) ? 1 : -1)
        pastEvents.sort((a, b) => (a.date > b.date) ? 1 : -1)
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