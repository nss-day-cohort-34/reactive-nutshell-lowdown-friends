// Author: Will Wilkinson
// Purpose: Render a card to the DOM with event data from the API, and two buttons that allow users to edit or delete a news article

import React, { Component } from 'react'

export default class EventCard extends Component {
    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    render() {
        return (
            <div className={`col-sm-4 my-4
            ${this.activeUser !== this.props.event.userId
            ? "friendsEventCard__div"
            : "eventCard__div"}`
            }>
                <h4 className="eventName__h4"><span>{this.props.event.name}</span></h4>
                <p className="eventDate__p">Date: <span>{(this.props.event.date)}</span></p>
                <p className="eventLocation__p">Location: <span>{this.props.event.location}</span></p>
                {// Render the 'edit' and 'delete' buttons only if userId in the event object is equal to the activeUser ID
                    this.activeUser === this.props.event.userId
                        ? <> <button className="edit__button btn btn-info" onClick={() => { this.props.history.push(`/events/${this.props.event.id}/edit`) }}>
                            Edit
                        </button>
                        <button className="delete__button btn btn-danger mx-3" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button> </>
                        : null
                }
            </div>
        )
    }
}