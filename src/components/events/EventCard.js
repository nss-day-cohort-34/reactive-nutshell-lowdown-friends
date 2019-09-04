import React, { Component } from 'react'



export default class EventCard extends Component {
    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    render() {
        return (
            <div className="eventCard__div col-sm-4 my-4">
                <h4 className="eventName__h4"><span>{this.props.event.name}</span></h4>
                <p className="eventDate__p">Date: <span>{(this.props.event.date)}</span></p>
                <p className="eventLocation__p">Location: <span>{this.props.event.location}</span></p>
                {
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