import React, { Component } from 'react';

class TaskHeader extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h1><b>Tasks</b></h1>
                    <button type="button" onClick={() => this.props.createTask(this.props.task.id)}>Create Task</button>
                </div>
            </div>
        );
    }
}

export default TaskHeader;