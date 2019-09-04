import React, { Component } from "react"
import NewsManager from '../../modules/EventManager';

export default class EventsForm extends Component {
    state = {
        title: "",
        newsURL: "",
        synopsis: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewArticle = evt => {
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
            NewsManager.addEvent(event)
                .then(() => this.props.history.push("/events"));
        }
    };
    render() {
        return (
            <>
                <form className="mt-5">
                    <fieldset className="text-center">
                        <div className="form-group">
                            <label htmlFor="newsTitle">Title</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="newsTitle"
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newsUrl">Link to article</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="newsUrl"
                                placeholder="https://www.yoururl.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newsSynopsis">Synopsis</label>
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="newsSynopsis"
                                placeholder="Synopsis"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewArticle}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}