import React, { Component } from "react"


export default class EventsHeader extends Component {
    render () {
        return (
            <header className="events__header container text-center">
                <h1 className="my-5">Events</h1>
                <button className="btn btn-primary">Add Event</button>
            </header>
        )
    }
}