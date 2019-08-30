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
        return fetch(`${remoteURL}/events`)
            .then(result => result.json())
    },
    post(event) {
        return fetch(`${remoteURL}/events/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(result => result.json())
    }

}