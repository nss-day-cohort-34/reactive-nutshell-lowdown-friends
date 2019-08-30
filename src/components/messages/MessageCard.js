import React, { Component } from 'react';
// import './Message.css'

class MessageCard extends Component {
  render() {
    return (
      <div className="message__card">
          <h3>{this.props.message.user.username}</h3>
          <p>{this.props.message.message}</p>
      </div>
    );
  }
}

export default MessageCard