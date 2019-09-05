// Author: Will Wilkinson
// Purpose: Hold state, deleteNewsArticle and render NewsCard components with newsArticles' data from the API.

import React, { Component } from "react"
import NewsCard from './NewsCard'
import NewsManager from '../../modules/NewsManager';

export default class NewsList extends Component {
    state = {
        newsArticles: [],
    }
    deleteNewsArticle = id => {
        NewsManager.deleteNewsArticle(id)
            .then(() => {
                this.componentDidMount()
            })
    }

    componentDidMount() {
        const activeUser = sessionStorage.getItem("activeUser")
        NewsManager.getAll(activeUser)
            .then(newsArticles => {
                this.setState({
                    newsArticles: newsArticles
                })
            })
    }

    render() {
        return (
            <>
                <div className="newList__div container">
                    <div className="row">
                        {this.state.newsArticles.map(newsArticle => {
                            return <NewsCard
                                key={newsArticle.id}
                                news={newsArticle}
                                state={this.state}
                                deleteNewsArticle={this.deleteNewsArticle}
                                {...this.props}
                            />
                        })}
                    </div>
                </div>
            </>
        )
    }
}