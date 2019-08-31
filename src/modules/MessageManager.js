const remoteURL = "http://localhost:5002"

const MessageData = {
  getSingleMessage(id, userId) {
    return fetch(`${remoteURL}/messages/${id}&userId=${userId}`)
      .then(result => result.json())
  },
  getMessageFromSearch(messageObjProperty, string, userId) {
    return fetch(`${remoteURL}/messages?${messageObjProperty}=${string}&userId=${userId}`)
      .then(result => result.json())
  },
  getAllMessages() {
    return fetch(`${remoteURL}/messages?_expand=user&_sort=date&_order=desc`)
      .then(result => result.json())
  },
  addNewMessageToDatabase(messageObj) {
    return fetch(`${remoteURL}/messages?_expand=user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageObj)
    })
      .then(result => result.json())
  },
  saveEditedMessageToDatabase(messageObj) {
    return fetch(`${remoteURL}/messages/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageObj)
    })
      .then(result => result.json())
  }
}

export default MessageData