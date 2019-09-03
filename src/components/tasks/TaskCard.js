import React, { Component } from 'react';
import './TaskCard.css'

class TaskCard extends Component {

    handleCheck = event => {
        event.preventDefault()
        this.props.task.isCompleted = !this.props.task.isCompleted
        this.props.updateTask(this.props.task)
    }

    handleClick = event => {
        event.preventDefault()

    }

    render() {
        return (
            <div key={this.props.task.id} className="task__card">
                <p className="task__card-header">Name: <button type="button"
                    className="link-button"
                    onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>{this.props.task.name}</button></p>
                <div className="task__card-content">
                    <p>Estimated Completion Date: {this.props.task.date}</p>
                    <p>Mark as Completed: <input type="checkbox" id="isCompleted" checked={this.props.task.isCompleted} onChange={this.handleCheck} /></p>
                    <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default TaskCard;