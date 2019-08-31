import React, { Component } from 'react'



export default class EventCard extends Component {
    render() {
        return (
            <div className="eventCard__div col-sm-4 my-4">
                <h4 className="eventName__h3">Name: <span>{this.props.event.name}</span></h4>
                <p className="eventDate__p">Date: <span>{this.props.event.date}</span></p>
                <p className="eventLocation__p">Location: <span>{this.props.event.location}</span></p>
                <button className="edit__button btn btn-info">Edit</button>
                <button className="delete__button btn btn-danger mx-3">Delete</button>
            </div>
        )
    }
}