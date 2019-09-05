// AUTHOR: Sarah Fleming
// Purpose: Render the header with buttons for "Add Task" and "Show/Hide Completed Tasks"

import React, { Component } from 'react';

export default class TaskHeader extends Component {

    toggleHidden = () => {
        this.props.stateHandler("isHidden", !this.props.state.isHidden)
    }

    render() {
        return (
            <header className="task__header">
                <h1>Tasks</h1>
                <button type="button" className="btn btn-primary" onClick={() =>
                    this.props.history.push("/tasks/new")}>Add Task</button>
                <button className="btn btn-primary" onClick={this.toggleHidden}>Show/Hide Completed Tasks</button>
            </header>
        );
    }
}