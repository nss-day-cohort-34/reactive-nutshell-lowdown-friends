import React, { Component } from "react"
import EventCard from './EventCard'

export default class EventsList extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h2 className="text-center my-5">EventsList</h2>
                    <div className="row">
                        {this.props.state.events.map(event => {
                            return <EventCard key={event.id} event={event} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}