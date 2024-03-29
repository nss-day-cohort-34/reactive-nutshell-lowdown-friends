// Author: Will Wilkinson
// Purpose: Render header element containing an h1 and a button that routes the user to the Add Event Page

import React, { Component } from "react"


export default class EventsHeader extends Component {
    render() {
        return (
            <header className="events__header container text-center">
                <h1 className="my-5">Events</h1>
                <button onClick={() => {
                    this.props.history.push("/events/new")
                }} className="btn btn-primary">
                    Add Event
                </button>
            </header>
        )
    }
}