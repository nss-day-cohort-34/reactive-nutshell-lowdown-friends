import React, { Component } from 'react'
import MessageCard from './MessageCard'

class MessageList extends Component {

  render() {

    return (
      <div className="message__list">
        {this.props.messages.map(message =>
          <MessageCard
            key={message.id}
            message={message}
          />
        )}
      </div>
    )
  }
}

export default MessageList
