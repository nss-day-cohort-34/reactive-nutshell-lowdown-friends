import React, { Component } from "react"


export default class EventsHeader extends Component {
    render () {
        return (
            <header className="events__header">
                <h1>Events</h1>
                <button>Add Event</button>
            </header>
        )
    }
}