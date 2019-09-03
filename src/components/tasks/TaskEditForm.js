import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';

export default class TaskEditForm extends Component {
    state = {
        editName: "",
        date: "",
        isCompleted: false,
        loadingStatus: true,
    };

    activeUserId = parseInt(sessionStorage.getItem("activeUser"))

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // Local method for validation, set loadingStatus, create task object, invoke the TaskManager post method, and redirect to the full task list
    updateExistingTask = evt => {
        evt.preventDefault();
            this.setState({ loadingStatus: true });
            const editedTask = {
                userId: this.activeUserId,
                name: this.state.editName,
                date: this.state.date,
                isCompleted: this.state.isCompleted,
                id: this.props.match.params.taskId
            };

            // Save the edited task and redirect user to task list
            TaskManager.saveEditedTaskToDatabase(editedTask)
                .then(() => this.props.history.push("/tasks"));
        }

        componentDidMount() {
            TaskManager.getSingleTask(this.props.match.params.taskId)
            .then(task => {
                this.setState({
                    editName: task.name,
                    date: task.date,
                    isCompleted: task.isCompleted,
                    loadingStatus: false,
                })
            })
        }

handleKeyPress = event => {
    if (event.key === "Enter") {
        this.updateExistingTask(event)
    }
}

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="editName">Name</label>
                            <input type="text" required
                                onChange={this.handleFieldChange}
                                onKeyPress={this.handleKeyPress}
                                id="editName"
                                value={this.state.editName}
                            />
                            {/* <label htmlFor="date">Estimated Completion Date</label>
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                            /> */}
                        </div>
                        {/* <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingTask}
                            >Submit</button>
                        </div> */}
                    </fieldset>
                </form>
            </>
        )
    }
}