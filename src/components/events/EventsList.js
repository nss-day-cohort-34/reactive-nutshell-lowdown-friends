import React, { Component } from "react"
import EventCard from './EventCard'
import EventsManager from '../../modules/EventManager';

export default class EventsList extends Component {
    state= {
        events: []
    }
    deleteEvent = id => {
        EventsManager.deleteEvent(id)
            .then(() => {
               this.componentDidMount()
            })
    }

    componentDidMount() {
        console.log("EventList ComponentDidMount")
        EventsManager.getAll()
            .then(events => this.setState({ events: events }))
    }

    render() {
        console.log("EventList Render")
        return (
            <>
                <div className="container">
                    <h2 className="text-center my-5">EventsList</h2>
                    <div className="row">
                        {this.state.events.map(event => {
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