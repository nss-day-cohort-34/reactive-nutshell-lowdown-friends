// AUTHOR: Sarah Fleming
// Purpose: Render the TaskHeader and TaskList modules

import React, { Component } from 'react';
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import "./TaskSection.css"

export default class TaskSection extends Component {
    constructor(props) {
        super(props);
        this.stateHandler = this.stateHandler.bind(this)
    }

    state = {
        tasks: [],
        isHidden: true
    }

    stateHandler(stateProperty, stateValue) {
        this.setState({
            [stateProperty]: stateValue
        })
    }

    render() {
        return (
            <section className="task__section">
                <TaskHeader {...this.props}
                    state={this.state}
                    stateHandler={this.stateHandler} />
                <TaskList {...this.props}
                    state={this.state}
                    stateHandler={this.stateHandler} />
            </section>
        )
    }
}