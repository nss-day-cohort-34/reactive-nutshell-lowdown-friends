import React, { Component } from 'react';

export default class TaskHeader extends Component {

    toggleHidden = () => {
        this.props.stateHandler("isHidden", !this.props.state.isHidden)
    }

    render() {
        return (
            <header className="task__header text-center my-3">
                <h1>Tasks</h1>
                <button type="button" className="btn btn-primary ml-5" onClick={() =>
                    this.props.history.push("/tasks/new")}>Add Task</button>
                <button className="btn btn-primary ml-5" onClick={this.toggleHidden}>Show/Hide Completed Tasks</button>
            </header>
        );
    }
}