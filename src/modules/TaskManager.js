const remoteURL = "http://localhost:5002"

const TaskData = {
    getSingleTask(id) {
        return fetch(`${remoteURL}/tasks/${id}`)
            .then(result => result.json())
    },
    getAllTasks(activeUserId) {
        return fetch(`${remoteURL}/tasks?userId=${activeUserId}&_sort=date&order=asc`)
            .then(result => result.json())
    },
    addNewTaskToDatabase(taskObj) {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
            .then(result => result.json())
    },
    saveEditedTaskToDatabase(taskObj) {
        return fetch(`${remoteURL}/tasks/${taskObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        }).then(data => data.json());
    },
    deleteTaskFromDatabase(id) {
        return fetch(`${remoteURL}/tasks/${id}`, {
          method: "DELETE"
        })
          .then(result => result.json())
      }
}

export default TaskData;