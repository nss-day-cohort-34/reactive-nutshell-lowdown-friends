// Author: Will Wilkinson
// Purpose: Render a card to the DOM with event data from the API, and two buttons that allow users to edit or delete a news article

import React, { Component } from 'react'

export default class EventCard extends Component {
    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    render() {
        return (
            <div className={`col-sm-4 my-4 card
            ${this.activeUser !== this.props.event.userId
            ? "friendsEventCard__div"
            : "eventCard__div"}`
            }>
                <div className="card-body">
                    <h4 className="eventName__h4 card-title"><span>{this.props.event.name}</span></h4>
                    <p className="eventDate__p card-subtitle">Date: <span>{(this.props.event.date)}</span></p>
                    <p className="eventLocation__p card-text">Location: <span>{this.props.event.location}</span></p>
                    {// Render the 'edit' and 'delete' buttons only if userId in the event object is equal to the activeUser ID
                        this.activeUser === this.props.event.userId
                            ? <> <button className="edit__button card-link btn btn-info" onClick={() => { this.props.history.push(`/events/${this.props.event.id}/edit`) }}>
                                Edit
                            </button>
                            <button className="delete__button card-link btn btn-danger mx-3" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button> </>
                            : null
                    }
                </div>
            </div>
        )
    }
}