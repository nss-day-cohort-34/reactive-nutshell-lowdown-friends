const remoteURL = "http://localhost:5002"

export default {
    getSingleNew(id) {
        return fetch(`${remoteURL}/news/${id}`)
            .then(result => result.json())
    },
    getAll(activeUser) {
        return fetch(`${remoteURL}/news?_sort=date&_order=desc&userId=${activeUser}`)
            .then(result => result.json())
    },
    addNew(newsArticle) {
        return fetch(`${remoteURL}/news/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsArticle)
        })
            .then(result => result.json())
    },
    deleteNew(newsId) {
        return fetch(`${remoteURL}/news/${newsId}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    editNew(editedNews) {
        return fetch(`${remoteURL}/news/${editedNews.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedNews)
        }).then(data => data.json());
    }

}