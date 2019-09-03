import React, { Component } from "react"
import EventCard from './EventCard'
import EventsManager from '../../modules/EventManager';

export default class EventsList extends Component {
    state = {
        futureEvents: [],
        pastEvents: []
    }
    deleteEvent = id => {
        EventsManager.deleteEvent(id)
            .then(() => {
                this.componentDidMount()
            })
    }

    componentDidMount() {
        EventsManager.getAll()
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
                console.log(this.state)
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