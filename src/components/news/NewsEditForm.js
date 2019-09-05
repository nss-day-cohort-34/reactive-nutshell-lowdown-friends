// Author: Will Wilkinson
// Purpose: Render a form that allows the user to edit an article, and handle the PUT functionality when they submit

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
            date: this.state.editDate,
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
                <form className="container">
                    <fieldset>
                        <div className="formgroup">
                            <label htmlFor="editTitle">Title</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editTitle"
                                value={this.state.editTitle}
                            />
                        </div>
                        <div className="formgroup">
                            <label htmlFor="editURL">URL</label>
                            <input
                                type="url"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editLocation"
                                value={this.state.editURL}
                            />
                        </div>
                        <div className="formgroup">
                            <label htmlFor="editSynopsis">Synopsis</label>
                            <textarea
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editSynopsis"
                                value={this.state.editSynopsis}
                            />
                        </div>
                        <button
                            type="button" disabled={this.state.loadingStatus}
                            onClick={this.updateExistingArticle}
                            className="btn btn-primary"
                        >Submit</button>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EditEditForm