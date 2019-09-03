import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';

class TaskForm extends Component {
    state = {
        name: "",
        date: "",
        isCompleted: false,
        loadingStatus: false,
    };

    activeUserId = parseInt(sessionStorage.getItem("activeUser"))

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // Local method for validation, set loadingStatus, create task object, invoke the TaskManager post method, and redirect to the full task list
    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.date === "") {
            window.alert("Please input a task name and estimated completion date");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                userId: this.activeUserId,
                name: this.state.name,
                date: this.state.date,
                isCompleted: this.state.isCompleted,
            };

            // Create the task and redirect user to task list
            TaskManager.addNewTaskToDatabase(task)
                .then(() => this.props.history.push("/tasks"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="name">Name</label>
                            <input type="text" required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Task Name"
                            />
                            <label htmlFor="date">Estimated Completion Date</label>
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewTask}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default TaskForm