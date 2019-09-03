import React, { Component } from 'react';
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import "./TaskSection.css"

class TaskSection extends Component {

    render() {
        return (
            <section className="task__section">
                <TaskHeader {...this.props} />
                <TaskList {...this.props} />
            </section>
        )
    }
}

export default TaskSection;