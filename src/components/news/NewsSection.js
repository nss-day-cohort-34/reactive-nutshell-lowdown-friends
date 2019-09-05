// Author: Will Wilkinson
// Purpose: Render an article tag containing NewsHeader and NewsList Component

import React, { Component } from "react";
import NewsHeader from "./NewsHeader"
import NewsList from "./NewsList"
import "./News.css"
export default class NewsSection extends Component {

    render() {
        return (
            <article className="news__section">
                <NewsHeader {...this.props} />
                <NewsList {...this.props}
                friendData={this.props.friendData}
                getAllFriendData={this.props.getAllFriendData}
                />
            </article>
        )
    }
}