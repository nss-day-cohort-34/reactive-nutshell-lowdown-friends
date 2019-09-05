import React, { Component } from "react"
import NewsManager from '../../modules/NewsManager';

export default class EventsForm extends Component {
    state = {
        newsTitle: "",
        newsURL: "",
        newsSynopsis: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewArticle = evt => {
        evt.preventDefault();
        if (this.state.newsTitle === "" || this.state.newsSynopsis === "" || this.state.newsURL === "") {
            window.alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const newNewsArticle = {
                title: this.state.newsTitle,
                date: new Date().toLocaleDateString(),
                synopsis: this.state.newsSynopsis,
                url: this.state.newsURL,
                userId: parseInt(sessionStorage.getItem("activeUser"))
            };

            // Create the news article and redirect user to news list
            NewsManager.addNewsArticle(newNewsArticle)
                .then(() => this.props.history.push("/"));
        }
    };
    render() {
        return (
            <>
                <form className="mt-5">
                    <fieldset className="text-center">
                        <div className="form-group">
                            <label htmlFor="newsTitle">Title</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="newsTitle"
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newsUrl">Link to article</label>
                            <input
                                type="url"
                                required
                                onChange={this.handleFieldChange}
                                id="newsURL"
                                placeholder="https://www.yoururl.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newsSynopsis">Synopsis</label>
                            <textarea
                                required
                                onChange={this.handleFieldChange}
                                id="newsSynopsis"
                                placeholder="Synopsis"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewArticle}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}