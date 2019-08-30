import React, { Component } from 'react'
import MessageHeader from './MessageHeader'
import MessageList from './MessageList'
import AddMessageForm from './MessageAddForm'

class Messages extends Component {
  render() {

    return (
      <div className="message__section">
        <MessageHeader />
        <MessageList />
        <AddMessageForm />
      </div>
    )
  }
}

export default Messages
