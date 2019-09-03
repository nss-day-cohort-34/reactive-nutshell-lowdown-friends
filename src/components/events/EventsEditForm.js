import React, { Component } from "react"
import EventManager from "../../modules/EventManager"

class EditEditForm extends Component {    //set the initial state
    state = {
        editName: "",
        editLocation: "",
        editDate: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEdit = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEvent = {
            id: this.props.match.params.eventId,
            name: this.state.editName,
            userId: parseInt(sessionStorage.getItem("activeUser")),
            location: this.state.editLocation,
            date: this.state.editDate
        };

        EventManager.editEvent(editedEvent)
            .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
        EventManager.getSingleEvent(this.props.match.params.eventId)
            .then(edit => {
                this.setState({
                    editName: edit.name,
                    editLocation: edit.location,
                    editDate: edit.date,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="editName">Edit name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editName"
                                value={this.state.editName}
                            />
                            <label htmlFor="editLocation">Location</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editLocation"
                                value={this.state.editLocation}
                            />
                            <label htmlFor="editDate">Date</label>
                            <input
                                type="date"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editDate"
                                value={this.state.editDate}
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEdit}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EditEditForm