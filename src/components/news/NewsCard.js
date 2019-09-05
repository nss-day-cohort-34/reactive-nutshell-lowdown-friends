// Author: Will Wilkinson
// Purpose: Render a card to the DOM with news data from the API, and two buttons that allow you to edit or delete a news article

import React, { Component } from 'react'

export default class NewsCard extends Component {
    newsCardStyle = {
        width: '18rem'
    }
    render() {
        return (
            <div className="newsCard__div col-md-4 my-4 card" style={this.newsCardStyle}>
                <div className="card-body">
                    <h4 className="newsTitle__h4 card-title"><span>{this.props.news.title}</span></h4>
                    <p className="newsDate__p card-subtitle">Timestamp: <span>{(this.props.news.date)}</span></p>
                    <a href={this.props.news.url} className="newsUrl__p"><span>{this.props.news.url}</span></a>
                    <p className="newsSynopsis__p card-text">Synopsis: <span>{this.props.news.synopsis}</span></p>
                    <button className="edit__button card-link btn btn-info" onClick={() => { this.props.history.push(`/${this.props.news.id}/edit`) }}>
                        Edit
                    </button>
                    <button className="delete__button card-link btn btn-danger mx-1" onClick={() => this.props.deleteNewsArticle(this.props.news.id)}>Delete</button>
                </div>
            </div>
        )
    }
}