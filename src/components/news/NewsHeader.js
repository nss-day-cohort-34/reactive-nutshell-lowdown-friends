import React, { Component } from "react"


export default class NewsHeader extends Component {
    render() {
        return (
            <header className="news__header container text-center">
                <h1 className="my-5">News</h1>
                <button onClick={() => {
                    this.props.history.push("/news/new")
                }} className="btn btn-primary">
                    Add News Article
                </button>
            </header>
        )
    }
}