import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"

class EditEditForm extends Component {    //set the initial state
    state = {
        editTitle: "",
        editURL: "",
        editSynopsis: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedNewsArticle = {
            id: this.props.match.params.newsId,
            title: this.state.editTitle,
            userId: parseInt(sessionStorage.getItem("activeUser")),
            url: this.state.editURL,
            synopsis: this.state.editSynopsis
        };

        NewsManager.editNewsArticle(editedNewsArticle)
            .then(() => this.props.history.push("/"))
    }

    componentDidMount() {
        NewsManager.getSingleNewsArticle(this.props.match.params.newsId)
            .then(newsArticle => {
                this.setState({
                    editTitle: newsArticle.title,
                    editURL: newsArticle.url,
                    editDate: newsArticle.date,
                    editSynopsis: newsArticle.synopsis,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="editTitle">Title</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editTitle"
                                value={this.state.editTitle}
                            />
                            <label htmlFor="editURL">URL</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editLocation"
                                value={this.state.editURL}
                            />
                            <label htmlFor="editSynopsis">Synopsis</label>
                            <textarea
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editSynopsis"
                                value={this.state.editSynopsis}
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingArticle}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EditEditForm