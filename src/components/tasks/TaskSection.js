import React, { Component } from 'react';
// import TaskManager from "../../modules/TaskManager";
// import TaskAddForm from "./TaskAddForm";
// import TaskEditForm from "./TaskEditForm";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import "./TaskSection.css"


// Component is not currently being used
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