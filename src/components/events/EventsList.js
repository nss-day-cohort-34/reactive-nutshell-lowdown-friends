import React, { Component } from "react"
import EventCard from './EventCard'

export default class EventsList extends Component {
    render() {
        console.log(this.props.state.events)
        return (
            <>
                <h2>EventsList</h2>
                {this.props.state.events.map(event => {
                    return <EventCard key={event.id} event={event} />
                })}
            </>
        )
    }
}