import React, { Component } from 'react'
import MessageCard from './MessageCard'
import MessageManager from '../../modules/MessageManager'

class MessageList extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    MessageManager.getAllMessages()
      .then((messagesArr) => {
        console.log(messagesArr)
        this.setState({
          messages: messagesArr
        })
      })
  }

  render() {

    return (
      <div className="message__list">
        {this.state.messages.map(message =>
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
