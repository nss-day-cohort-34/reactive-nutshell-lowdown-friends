import React, { Component } from 'react';

class TaskCompleted extends Component {

handleCheck = event => {
    event.preventDefault()
    this.props.task.isCompleted = !this.props.task.isCompleted
    this.props.updateTask(this.props.task)
}

    render() {
        return (
            <>
            <h2>Completed Tasks</h2>
            <div key={this.props.task.id} className="card">
                <div className="card-content">
                    <h3>Name: <b>{this.props.task.name}</b></h3>
                    <p>Estimated Completion Date: {this.props.task.date}</p>
                    <p>Mark as Completed: <input type="checkbox" id="isCompleted" checked={this.props.task.isCompleted} onChange={this.handleCheck} /></p>
                    <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                </div>
            </div>
            </>
        );
    }
}

export default TaskCompleted;