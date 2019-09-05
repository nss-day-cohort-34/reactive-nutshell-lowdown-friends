// Author: Will Wilkinson
// Purpose: Render header element containing and h1 and a button that routes the user to the Add News Article Page

import React, { Component } from "react"


export default class NewsHeader extends Component {
    render() {
        return (
            <header className="news__header container text-center">
                <h1 className="my-5">News</h1>
                <button onClick={() => {
                    this.props.history.push("/new")
                }} className="btn btn-primary">
                    Add News Article
                </button>
            </header>
        )
    }
}