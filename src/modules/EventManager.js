// Author: Will Wilkinson
// Purpose: Handle all fetch calls to the events API

const remoteURL = "https://protected-castle-32548.herokuapp.com"

export default {
    getSingleEvent(id) {
        return fetch(`${remoteURL}/events/${id}`)
            .then(result => result.json())
    },
    getAllEventsForActiveUser(activeUser) {
        return fetch(`${remoteURL}/events?_sort=date&_order=asc&userId=${activeUser}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/events?_sort=date&_order=asc&_expand=user`)
            .then(result => result.json())
    },
    addEvent(event) {
        return fetch(`${remoteURL}/events/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(result => result.json())
    },
    deleteEvent(eventId) {
        return fetch(`${remoteURL}/events/${eventId}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    },
    editEvent(editedEvent) {
        return fetch(`${remoteURL}/events/${editedEvent.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEvent)
        }).then(data => data.json());
    }

}