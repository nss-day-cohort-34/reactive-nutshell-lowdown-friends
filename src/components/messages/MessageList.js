import React, { Component } from 'react'
import MessageCard from './MessageCard'
import MessageManager from '../../modules/MessageManager'

class MessageList extends Component {
  state = {
    message: [],
  }

  // componentDidMount() {
  //   MessageManager.getAll()
  //     .then((messagesArr) => {
  //       this.setState({
  //         messages: messagesArr
  //       })
  //     })
  // }

  render() {

    return (
      <div className="message__list">
        <MessageCard />
        {/* {this.state.messages.map(message =>
          <MessageCard
            // key={message.id}
            message={message}
          /> */}
        {/* )} */}
      </div>
    )
  }
}

export default MessageList
