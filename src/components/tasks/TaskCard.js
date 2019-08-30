import React, { Component } from 'react';

class TaskCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <b>{this.props.task.name}</b></h3>
                    <p>Estimated Completion Date: {this.props.task.date}</p>
                    <p>Mark as Completed: {this.props.task.isCompleted}</p>
                    {/* <button type="button"
                        onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button> */}
                    <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default TaskCard;