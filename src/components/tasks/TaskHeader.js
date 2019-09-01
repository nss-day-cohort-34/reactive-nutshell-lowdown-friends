import React, { Component } from 'react';

// Component is not currently being used
class TaskHeader extends Component {

    render() {
        return (
            <header className="task__header">
                    <h1>Tasks</h1>
                    <button type="button" onClick={() =>
                        this.props.history.push("/tasks/new")}>Add Task</button>
            </header>
        );
    }
}

export default TaskHeader;