// Author: Will Wilkinson
// Purpose: Render a form that allows the user to add a new event to the API, and handle the POST functionality when they submit

import React, { Component } from "react"
import EventManager from '../../modules/EventManager';

export default class EventsForm extends Component {
    state = {
        eventName: "",
        eventDate: "",
        eventLocation: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.eventName === "" || this.state.eventDate === "" || this.state.eventLocation === "") {
            window.alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                name: this.state.eventName,
                date: this.state.eventDate,
                location: this.state.eventLocation,
                userId: parseInt(sessionStorage.getItem("activeUser"))
            };

            // Create the event and redirect user to event list
            EventManager.addEvent(event)
                .then(() => this.props.history.push("/events"));
        }
    };
    render() {
        return (
            <>
                <form className="mt-5">
                    <fieldset className="text-center">
                        <div className="form-group">
                            <label htmlFor="eventName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="eventName"
                                placeholder="Event name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventName">Location</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="eventLocation"
                                placeholder="Event location"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventName">Date</label>
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="eventDate"
                                placeholder="Event Date"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEvent}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}