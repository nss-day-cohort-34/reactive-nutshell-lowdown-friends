import React, { Component } from "react";
import NewsHeader from "./NewsHeader"
import NewsList from "./NewsList"
import "./News.css"
export default class NewsSection extends Component {

    render() {
        return (
            <article className="news__section">
                <NewsHeader {...this.props} />
                <NewsList {...this.props} />
            </article>
        )
    }
}