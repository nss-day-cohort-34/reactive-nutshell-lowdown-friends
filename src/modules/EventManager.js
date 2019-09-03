const remoteURL = "http://localhost:5002"

export default {
    getSingleEvent(id) {
        return fetch(`${remoteURL}/events/${id}`)
            .then(result => result.json())
    },
    getEventFromSearch(eventObjProperty, string) {
        return fetch(`${remoteURL}/events?${eventObjProperty}=${string}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/events?_sort=date&_order=asc`)
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