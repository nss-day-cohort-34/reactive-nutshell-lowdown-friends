import React, { Component } from 'react';
import './TaskCompleted.css'

class TaskCompleted extends Component {

handleCheck = event => {
    event.preventDefault()
    this.props.task.isCompleted = !this.props.task.isCompleted
    this.props.updateTask(this.props.task)
}

    render() {
        return (
            <>
            <div key={this.props.task.id} className="card">
                <div className="completedTask__card card-content">
                    <p className="completedTask__card-header">Name: {this.props.task.name}</p>
                    <p>Estimated Completion Date: {this.props.task.date}</p>
                    <p>Completed: <input type="checkbox" id="isCompleted" checked={this.props.task.isCompleted} onChange={this.handleCheck} /></p>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                </div>
            </div>
            </>
        );
    }
}

export default TaskCompleted;