import React, { Component } from "react";
import EventsHeader from "./EventsHeader"
import EventsList from "./EventsList"
import EventsManager from "../../modules/EventManager"

export default class EventsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        EventsManager.getAll()
            .then(events => this.setState({ events: events }))
    }

    render() {
        return (
            <section className="events__section">
                <EventsHeader state={this.state} {...this.props} />
                <EventsList state={this.state} {...this.props} />
            </section>
        )
    }
}