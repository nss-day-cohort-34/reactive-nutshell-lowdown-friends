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
                this.getAllNewsArticles()
            })
    }

    componentDidMount() {
        this.props.getAllFriendData()
        .then(() => {
            this.getAllNewsArticles()
        })
    }

    getAllNewsArticles = () => {
        const activeUser = sessionStorage.getItem("activeUser")
        return NewsManager.getAllNewsForActiveUser(activeUser)
            .then(newsArticles => {
                const friendNewsArr = this.props.friendData.acceptedFriends.map(friend => {
                    return friend.news
                }).flat(1)
                const allNews = newsArticles.concat(friendNewsArr)
                this.setState({
                    newsArticles: allNews
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
                                friendData={this.props.friendData}
                                getAllFriendData={this.props.getAllFriendData}
                            />
                        })}
                    </div>
                </div>
            </>
        )
    }
}