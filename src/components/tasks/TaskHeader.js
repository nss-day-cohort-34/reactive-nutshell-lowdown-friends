import React, { Component } from 'react';

// Component is not currently being used
class TaskHeader extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h1>Tasks</h1>
                    <button type="button" onClick={() => this.props.history.push("/tasks/new")}>Create Task</button>
                </div>
            </div>
        );
    }
}

export default TaskHeader;