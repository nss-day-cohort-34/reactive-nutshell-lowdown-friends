import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';

class TaskList extends Component {
    state = {
        tasks: [],
    }

    componentDidMount() {
        console.log("TASK LIST: ComponentDidMount");
        //getAll from TaskManager and hang on to that data; put it in state
        const activeUserId = sessionStorage.getItem("activeUser")
        TaskManager.getAllTasks(activeUserId)
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })
    }
    // Wherever the state is that's holding a list of items is where you need to define actions that affect state, which is why deleteTask() is defined here instead of on TaskCard
    deleteTask = id => {
        TaskManager.deleteTaskFromDatabase(id)
            .then(() => {
                const activeUserId = sessionStorage.getItem("activeUser")
                TaskManager.getAllTasks(activeUserId)
                    .then((newTasks) => {
                        this.setState({
                            tasks: newTasks
                        })
                    })
            })
    }

    render() {
        console.log("TASK LIST: Render");

        return (
            <>
                {/* <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/tasks/new") }}>
                        Admit Task</button>
                </section> */}
                <div className="task__list">
                    {this.state.tasks.map(task =>
                        <TaskCard
                            key={task.id}
                            task={task}
                            deleteTask={this.deleteTask}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default TaskList;