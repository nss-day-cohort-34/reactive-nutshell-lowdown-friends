import React, { Component } from 'react';
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";

// Component is not currently being used
class TaskSection extends Component {

    render() {
        return (
            <>
            <TaskHeader />
            <TaskList />
            </>
        )
    }
}

export default TaskSection;