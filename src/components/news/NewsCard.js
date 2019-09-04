import React, { Component } from 'react'



export default class NewsCard extends Component {
    render() {
        return (
            <div className="newsCard__div col-sm-4 my-4">
                <h4 className="newsName__h4"><span>{this.props.news.title}</span></h4>
                <p className="newsDate__p">Timestamp: <span>{(this.props.news.date)}</span></p>
                <p className="newsLocation__p">Url: <span>{this.props.news.url}</span></p>
                <p className="newsLocation__p">Synopsis: <span>{this.props.news.synopsis}</span></p>
                <button className="edit__button btn btn-info" onClick={() => { this.props.history.push(`/${this.props.news.id}/edit`) }}>
                    Edit
                </button>
                <button className="delete__button btn btn-danger mx-1" onClick={() => this.props.deleteNewsArticle(this.props.news.id)}>Delete</button>
            </div>
        )
    }
}