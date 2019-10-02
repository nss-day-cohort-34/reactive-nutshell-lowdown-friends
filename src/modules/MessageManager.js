const remoteURL = "https://protected-castle-32548.herokuapp.com"

const MessageData = {
  getSingleMessage(id, userId) {
    return fetch(`${remoteURL}/messages/${id}`)
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
    return fetch(`${remoteURL}/messages/${messageObj.id}`, {
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