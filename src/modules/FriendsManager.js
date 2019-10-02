const remoteURL = "https://protected-castle-32548.herokuapp.com"

export default {
    getSingleFriend(id) {
        return fetch(`${remoteURL}/friends/${id}`)
            .then(result => result.json())
    },
    getAllFriends(friendObjProperty, searchId) {
        return fetch(`${remoteURL}/friends?${friendObjProperty}=${searchId}`)
            .then(result => result.json())
    },
    addFriendshipRequest(friendshipObj) {
        return fetch(`${remoteURL}/friends/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendshipObj)
        })
            .then(result => result.json())
    },
    deleteFriendShip(friendshipId) {
        return fetch(`${remoteURL}/friends/${friendshipId}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    acceptFriendShip(friendshipObj) {
        return fetch(`${remoteURL}/friends/${friendshipObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendshipObj)
        })
            .then(result => result.json())
    }
}