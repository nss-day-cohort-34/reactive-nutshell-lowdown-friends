import React, { Component } from 'react'
import MessageCard from './MessageCard'
import './MessageList.css'

class MessageList extends Component {
  render() {
    return (
      <>
        {
          this.props.messages.length === 0
            ? <h2>Start a Conversation!</h2>
            : null
        }
        <div className="message__list">
          {
            this.props.messages.map(message =>
              <MessageCard
                key={message.id}
                messageObj={message}
                updateSingleCard={this.props.updateSingleCard}
              />)
          }
        </div>
      </>
    )
  }
}

export default MessageList
