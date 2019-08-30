import React, { Component } from 'react'



export default class EventCard extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="eventCard__div">
                <h3 className="eventName__h3">Name: <span>{this.props.event.name}</span></h3>
                <p className="eventDate__p">Date: <span>{this.props.event.date}</span></p>
                <p className="eventLocation__p">Location: <span>{this.props.event.location}</span></p>
                <button className="edit__button">Edit</button>
                <button className="delete__button">Delete</button>
            </div>
        )
    }
}