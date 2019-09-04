import React, { Component } from 'react'



export default class NewsCard extends Component {
    render() {
        return (
            <div className="newsCard__div col-sm-4 my-4">
                <h4 className="newsName__h4"><span>{this.props.news.name}</span></h4>
                <p className="newsDate__p">Date: <span>{(this.props.news.date)}</span></p>
                <p className="newsLocation__p">Location: <span>{this.props.news.location}</span></p>
                <button className="edit__button btn btn-info" onClick={() => { this.props.history.push(`/${this.props.news.id}/edit`) }}>
                    Edit
                </button>
                <button className="delete__button btn btn-danger mx-3" onClick={() => this.props.deleteNewsArticle(this.props.news.id)}>Delete</button>
            </div>
        )
    }
}