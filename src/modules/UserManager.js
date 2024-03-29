const remoteURL = "https://protected-castle-32548.herokuapp.com"

const UserData = {
  getSingleUser(id) {
    return fetch(`${remoteURL}/users/${id}`)
      .then(result => result.json())
  },
  getUserFromSearch(userObjProperty, string) {
    return fetch(`${remoteURL}/users?${userObjProperty}=${string}`)
      .then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`)
      .then(result => result.json())
  },
  getAllExcludingActiveUser(activeUserId) {
    return fetch(`${remoteURL}/users?id_ne=${activeUserId}&_embed=events&_embed=news`)
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