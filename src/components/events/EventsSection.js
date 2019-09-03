import React, { Component } from "react";
import EventsHeader from "./EventsHeader"
import EventsList from "./EventsList"
import "./Events.css"
export default class EventsSection extends Component {

    render() {
        return (
            <section className="events__section">
                <EventsHeader {...this.props} />
                <EventsList {...this.props} />
            </section>
        )
    }
}