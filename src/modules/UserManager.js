const remoteURL = "http://localhost:5002"

const UserData = {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`)
      .then(result => result.json())
    },
    get(userObjProperty, string) {
      return fetch(`${remoteURL}/users?${userObjProperty}=${string}`)
      .then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`)
      .then(result => result.json())
  },
  post(user) {
    return fetch(`${remoteURL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(result => result.json())
  }
}

export default UserData