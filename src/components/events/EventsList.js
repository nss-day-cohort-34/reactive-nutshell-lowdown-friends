import React, { Component } from "react"
import EventCard from './EventCard'
import EventsManager from '../../modules/EventManager';

export default class EventsList extends Component {
    state = {
        futureEvents: [],
        pastEvents: [],
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
        this.props.getAllFriendData()
            .then(() => {
                this.getAllEvents()
                    .then(allEvents => {
                        this.filterPastAndFutureEvents(allEvents)
                    })
            })
    }

    // Get all events created by activeUser and their friends
    getAllEvents = () => {
        const activeUser = sessionStorage.getItem("activeUser")
        return EventsManager.getAllEventsForActiveUser(activeUser)
            .then(events => {
                const friendEventsArr = this.props.friendData.friendsWithUserInfo.map(friend => {
                    return friend.events
                }).flat(1)
                const allEvents = events.concat(friendEventsArr)
                return allEvents
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